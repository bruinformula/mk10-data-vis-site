import React, { useState } from 'react';
import './ToggleSwitch.css';  // Same CSS from before

function ToggleSwitch({ onToggle, label }) {
  // State to track if the switch is on or off
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the switch and call the provided callback
  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);  // Call the callback function with the new state
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}>
        <div className="handle"></div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
