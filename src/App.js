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
      <h1>Data Visualizer</h1>
      <UploadCSV handleFileUpload={handleFileUpload} />
      {uploaded && (
        <iframe src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&from=1722112557602&to=1722139927192&panelId=2" width="1000" height="500" frameborder="0"></iframe>
      )}
    </div>
  );
};

export default App;