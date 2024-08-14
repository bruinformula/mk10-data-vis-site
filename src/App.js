import React, { useState } from 'react';
import UploadCSV from './components/UploadCSV';
import './App.css';

const App = () => {
  const [measurementGroups, setMeasurementGroups] = useState(null);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:5001/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setMeasurementGroups(data.measurementGroups);
  };

  return (
    <div className="App">
      <h1>Data Visualizer</h1>
      <UploadCSV handleFileUpload={handleFileUpload} />
      <div className="panels">
        {measurementGroups && (
          <>
            {measurementGroups.group1.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=3" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
            {measurementGroups.group2.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=4" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
            {measurementGroups.group3.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=5" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
            {measurementGroups.group4.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=6" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
            {measurementGroups.group5.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=7" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
            {measurementGroups.group6.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=8" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
            {measurementGroups.group7.length > 0 && (
              <iframe 
                src="http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=9" 
                width="750" 
                height="500" 
                frameborder="0">
              </iframe>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;

//fix time frame issue: right now, the panels aren't dynamic -> 
//that means, panels are hardcoded and dependent on timeframe..

//new issue, grafana standard doesn't support dynamic timeframes 

//if some random data from who knows when gets added, basically, shit not gonna work because rn
//the panel only cover the past 30 days.. 