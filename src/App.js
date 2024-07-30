import React, { useState } from 'react';
import Papa from 'papaparse';
import UploadCSV from './components/UploadCSV';
// import Graph from './components/Graph';
import './App.css';

const App = () => {
  const [uploaded, setUploaded] = useState(false);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch('http://localhost:5001/upload', {
      method: 'POST',
      body: formData,
    });

    setUploaded(true);
  };

  return (
    <div className="App">
      <h1>Data Visualizer with Grafana</h1>
      <UploadCSV handleFileUpload={handleFileUpload} />
      {uploaded && (
        <iframe
          src="http://localhost:3000/d/fdsshyafq8qv4e/new-dashboard?orgId=1&from=1722113737754&to=1722135337754&viewPanel=2"
          width="100%"
          height="800px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default App;