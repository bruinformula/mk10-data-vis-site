const express = require('express');
const fileUpload = require('express-fileupload');
const { InfluxDB, Point, HttpError } = require('@influxdata/influxdb-client');
const { DeleteAPI } = require('@influxdata/influxdb-client-apis');
const Papa = require('papaparse');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(fileUpload());

const token = 'pGbHo_VaHFs4TwlkKX7TKxyIos9C9swN-vTucxlm2uzoCNCX9Q3QlBYQ-IgPLYQf6ZqNVsNmGHEH9wXwliiZ4A==';
const org = 'BFR';
const bucket = 'datavistest';
const client = new InfluxDB({ url: 'http://localhost:8086', token });

const deleteAllData = async () => {
  const deleteApi = new DeleteAPI(client);
  const start = '1970-01-01T00:00:00Z';
  const stop = new Date().toISOString();
  try {
    await deleteApi.postDelete({
      org,
      bucket,
      body: {
        start,
        stop,
      },
    });
    console.log('Existing data deleted');
  } catch (error) {
    console.error(`Error during data deletion: ${error.stack}`);
  }
};

app.post('/upload', async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;

  try {
    await deleteAllData();

    Papa.parse(file.data.toString(), {
      header: true,
      complete: async (results) => {
        const data = results.data;
        const writeApi = client.getWriteApi(org, bucket);
        writeApi.useDefaultTags({ host: 'host1' });

        try {
          for (let row of data) {
            if (row._time) {
              const timestamp = new Date(row._time).getTime() * 1000000;
              for (let key in row) {
                if (key !== '_time' && !isNaN(parseFloat(row[key]))) {
                  const value = parseFloat(row[key]);
                  console.log(`Parsed row: _time=${row._time}, ${key}=${row[key]}`);
                  console.log(`Writing point: ${key} value=${value} ${timestamp}`);

                  const point = new Point(key)
                    .floatField('value', value)
                    .timestamp(timestamp);

                  writeApi.writePoint(point);
                }
              }
            }
          }
          await writeApi.close();
          console.log('Finished writing points');
          res.send('File uploaded and data inserted');
        } catch (err) {
          console.error(`Error writing points: ${err.stack}`);
          res.status(500).send(err.stack);
        }
      },
    });
  } catch (error) {
    console.error(`Error during file upload: ${error.stack}`);
    res.status(500).send(error.stack);
  }
});

app.listen(5001, () => console.log('Server started on port 5001'));
