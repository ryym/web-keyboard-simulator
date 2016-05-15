import React from 'react';

export default function Settings({ onKeyboardTypeChange }) {
  function handleUserKeyboardChange(event) {
    onKeyboardTypeChange('userKeyboardType', event.target.value);
  }
  function handleSimulationKeyboardChange(event) {
    onKeyboardTypeChange('simulationKeyboardType', event.target.value);
  }

  return (
    <section className="settings">
      <div className="settings_keyboard-from">
        <span>Using</span>
        <select onChange={handleUserKeyboardChange}>
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
        <span>,</span>
      </div>
      <div className="settings_keyboard-from">
        <span>Simulate</span>
        <select onChange={handleSimulationKeyboardChange}>
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
      </div>
    </section>
  );
}
