const express = require('express');
const fileUpload = require('express-fileupload');
const { Pool } = require('pg');
const Papa = require('papaparse');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(fileUpload());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'datavis_database',
  password: 'SoftwareIsBestSubteam',
  port: 5432,
});

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  Papa.parse(file.data.toString(), {
    header: true,
    complete: (results) => {
      const data = results.data;
      const query = 'INSERT INTO datavis_table (column1, column2) VALUES ($1, $2)';
      data.forEach(row => {
        pool.query(query, [row.column1, row.column2]);
      });
      res.send('File uploaded and data inserted');
    },
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
