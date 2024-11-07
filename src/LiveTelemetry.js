import React, { useEffect, useState } from "react";

const LiveTelemetry = () => {

  return (
    <div>
      <h1>Live Telemetry</h1>
      <iframe
        src="http://localhost:3000/d-solo/be2k790zq4sn4e/live-telemetry-dashboard?orgId=1&panelId=1&from=now-1m&to=now&refresh=1s"
        width="1200"
        height="600"
        frameBorder="0"
        title="Live Telemetry"
      ></iframe>
    </div>
  );
};

export default LiveTelemetry;
