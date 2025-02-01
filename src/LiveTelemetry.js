import React, { useEffect, useState } from "react";
import "./LiveTelemetry.css";

const LiveTelemetry = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.getElementById("graph");
      if (iframe) {
         iframe.src = iframe.src; // Reset the src to reload the iframe
        console.log("iframe reloaded");
      }
    }, 1000); // Reload every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  

  return (
  <div>
    <h1>Live Telemetry</h1>
    {/* <iframe
      id="graph"
      src="http://localhost:3000/d-solo/be2k790zq4sn4e/live-telemetry-dashboard?orgId=1&panelId=1&from=now-1m&to=now&refresh=1s"
      width="1200"
      height="600"
      frameBorder="0"
      title="Live Telemetry"
      allowTransparency="True"
    ></iframe> */}


    <object class='iframe'
      id="graph"
      data="http://localhost:3000/d-solo/be2k790zq4sn4e/live-telemetry-dashboard?orgId=1&panelId=1&from=now-1m&to=now&refresh=1s"
      width="1200"
      height="600"
      frameBorder="0"
      title="Live Telemetry"
      allowTransparency="True"
    ></object>
  </div>
);

};

export default LiveTelemetry;
