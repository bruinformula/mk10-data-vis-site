// UploadCSV.js

//or add the format checker here


import React, { useState } from 'react';

const UploadCSV = ({ handleFileUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = () => {
    Array.from(selectedFiles).forEach(file => handleFileUpload(file));
  };

  return (
    <div>
      <input type="file" multiple accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadCSV;
