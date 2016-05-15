import React from 'react';

export default function Settings({ onKeyboardTypeChange }) {
  function handleUserKeyboardChange(event) {
    onKeyboardTypeChange('userKeyboardType', event.target.value);
  }
  function handleSimulationKeyboardChange(event) {
    onKeyboardTypeChange('simulationKeyboardType', event.target.value);
  }

  return (
    <section className="setting">
      <div className="setting-item setting_keyboard-from">
        <span>Using</span>
        <select onChange={handleUserKeyboardChange}>
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
      </div>
      <div className="setting-item setting_keyboard-to">
        <span>Simulate</span>
        <select onChange={handleSimulationKeyboardChange}>
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
      </div>
    </section>
  );
}
