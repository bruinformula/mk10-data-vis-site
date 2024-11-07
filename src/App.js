import React, { useState } from "react";
import UploadCSV from "./components/UploadCSV";
import ToggleSwitch from "./components/ToggleSwitch";
import "./App.css";
import LiveTelemetry from "./LiveTelemetry";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const [measurementGroups, setMeasurementGroups] = useState([]);
  const [timeRanges, setTimeRanges] = useState([]);
  const [loadedPanels, setLoadedPanels] = useState({
    group1: false,
    group2: false,
    group3: false,
    group4: false,
    group5: false,
    group6: false,
    group7: false,
  });

  const [logScales, setLogScales] = useState({
    group1: false,
    group2: false,
    group3: false,
    group4: false,
    group5: false,
    group6: false,
    group7: false,
  });

  const groupDisplayNames = {
    group1: "TRV",
    group2: "ACY",
    group3: "Wheel Speed & Steering Angle",
    group4: "Shock Travel & Tire Temp",
    group5: "Brake Rotor Temp",
    group6: "Suspension Strain & Half Shaft Strain ",
    group7: "Pitot Tube Air Pressure",
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("logScales", JSON.stringify(logScales));

    const response = await fetch("http://localhost:5001/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setMeasurementGroups((prev) => [...prev, data.measurementGroups]);
    setTimeRanges((prev) => [
      ...prev,
      { from: data.minTimestamp, to: data.maxTimestamp },
    ]);
  };

  const handleIframeLoad = (panelGroup) => {
    setLoadedPanels((prev) => ({ ...prev, [panelGroup]: true }));
  };

  const handleLogScaleToggle = (groupKey) => {
    setLogScales((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Upload CSV</Link>
            </li>
            <li>
              <Link to="/telemetry">Live Telemetry</Link>
            </li>
          </ul>
        </nav>

        {}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Data Visualizer</h1>

                <div className="toggles-container">
                  {}
                  {Object.keys(logScales).map((groupKey) => (
                    <div className="toggle-item" key={groupKey}>
                      <ToggleSwitch
                        onToggle={() => handleLogScaleToggle(groupKey)}
                        isOn={logScales[groupKey]}
                      />
                      {/* Display the customized name using the mapping */}
                      <small className="toggle-label">
                        {groupDisplayNames[groupKey]} Log Scale
                      </small>
                    </div>
                  ))}
                </div>

                <UploadCSV handleFileUpload={handleFileUpload} />

                <div className="panels-container">
                  {measurementGroups.length > 0 && (
                    <>
                      {[
                        "group1",
                        "group2",
                        "group3",
                        "group4",
                        "group5",
                        "group6",
                        "group7",
                      ].map((groupKey, panelIndex) => (
                        <div key={groupKey} className="panel-group">
                          {measurementGroups.map(
                            (group, index) =>
                              group[groupKey].length > 0 && (
                                <div
                                  key={`${groupKey}-${index}`}
                                  className="panel"
                                >
                                  <iframe
                                    src={`http://localhost:3000/d-solo/fdsshyafq8qv4e/new-dashboard?orgId=1&panelId=${
                                      panelIndex + 3
                                    }&from=${timeRanges[index].from}&to=${
                                      timeRanges[index].to
                                    }`}
                                    width="600"
                                    height="400"
                                    frameBorder="0"
                                    onLoad={() => handleIframeLoad(groupKey)}
                                    style={{
                                      display: loadedPanels[groupKey]
                                        ? "block"
                                        : "none",
                                    }}
                                  ></iframe>
                                </div>
                              )
                          )}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            }
          />

          <Route path="/telemetry" element={<LiveTelemetry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
