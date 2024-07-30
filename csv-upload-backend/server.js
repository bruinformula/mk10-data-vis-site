const express = require('express');
const fileUpload = require('express-fileupload');
const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const Papa = require('papaparse');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(fileUpload());

const token = 'pGbHo_VaHFs4TwlkKX7TKxyIos9C9swN-vTucxlm2uzoCNCX9Q3QlBYQ-IgPLYQf6ZqNVsNmGHEH9wXwliiZ4A==';
const org = 'BFR';
const bucket = 'datavistest';
const client = new InfluxDB({ url: 'http://localhost:8086', token });

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  Papa.parse(file.data.toString(), {
    header: true,
    complete: (results) => {
      const data = results.data;
      const writeApi = client.getWriteApi(org, bucket);
      writeApi.useDefaultTags({ host: 'host1' });

      data.forEach(row => {
        if (row._time && row.acceleration) {
          const value = parseFloat(row.acceleration);
          const timestamp = new Date(row._time).getTime() * 1000000;
          console.log(`Parsed row: _time=${row._time}, acceleration=${row.acceleration}`);
          console.log(`Writing point: acceleration value=${value} ${timestamp}`);

          const point = new Point('acceleration')
            .floatField('value', value)
            .timestamp(timestamp);

          writeApi.writePoint(point);
        } else {
          console.log(`Skipping invalid row: ${JSON.stringify(row)}`);
        }
      });

      writeApi
        .close()
        .then(() => res.send('File uploaded and data inserted'))
        .catch(err => res.status(500).send(err.stack));
    },
  });
});

app.listen(5001, () => console.log('Server started on port 5001'));
