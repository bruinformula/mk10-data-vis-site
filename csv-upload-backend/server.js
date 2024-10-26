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
  let measurementGroups = {
      group1: [], // TRV cooling water flow, TRV cooling air flow, TRV water pressure, TRV rad inlet temp, TRV rad outlet temp 
      group2: [], // ACY cooling airflow, ACY cooling temps
      group3: [], // Wheel Speed, Steering Angle
      group4: [], // Shock Travel, Tire Temperature
      group5: [], // Brake Rotor Temperature
      group6: [], // Strain in suspension linkages, Strain in half shafts
      group7: [], // Pitot Tube Air Pressure
      group8: [], // SOC, battery health temp, pack voltage, current, average cell voltage, highest cell voltage, lowest cell voltage, 
                  // highest clel temp, lowest cell temp, average cell temp, balancing current, C-rate, relay states, fault states, peanits
      group9: [], // 3-Axis Accelerometer, Gyroscope, and Magnetometer data
  };

  // Variables to store the earliest and latest timestamps
  let minTimestamp = null;
  let maxTimestamp = null;

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
                          const timestamp = new Date(row._time).getTime();
                          // Update min and max timestamps
                          if (!minTimestamp || timestamp < minTimestamp) minTimestamp = timestamp;
                          if (!maxTimestamp || timestamp > maxTimestamp) maxTimestamp = timestamp;

                          const influxTimestamp = timestamp * 1000000;
                          for (let key in row) {
                              if (key !== '_time' && !isNaN(parseFloat(row[key]))) {
                                  const value = parseFloat(row[key]);

                                  // Grouping logic
                                  if (["TRV cooling water flow", "TRV cooling airflow", "TRV water pressure"].includes(key)) {
                                      measurementGroups.group1.push(key);
                                  } else if (["ACY cooling airflow", "ACY cooling temps"].includes(key)) {
                                      measurementGroups.group2.push(key);
                                  } else if (["Wheel Speed", "Steering Angle"].includes(key)) {
                                      measurementGroups.group3.push(key);
                                  } else if (["Shock Travel", "Tire Temperature"].includes(key)) {
                                      measurementGroups.group4.push(key);
                                  } else if (key === "Brake Rotor Temperature") {
                                      measurementGroups.group5.push(key);
                                  } else if (["Strain in suspension linkages", "Strain in half shafts"].includes(key)) {
                                      measurementGroups.group6.push(key);
                                  } else if (key === "Pitot Tube Air Pressure") {
                                      measurementGroups.group7.push(key);
                                  }

                                  const point = new Point(key)
                                      .floatField('value', value)
                                      .timestamp(influxTimestamp);

                                  writeApi.writePoint(point);
                              }
                          }
                      }
                  }
                  await writeApi.close();
                  console.log('Finished writing points');
                  res.json({ measurementGroups, minTimestamp, maxTimestamp });
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
