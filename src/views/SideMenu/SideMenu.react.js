import React from 'react';

export default function SideMenu({ onKeyboardTypeChange }) {
  function handleUserKeyboardChange(event) {
    onKeyboardTypeChange('userKeyboardType', event.target.value);
  }
  function handleSimulationKeyboardChange(event) {
    onKeyboardTypeChange('simulationKeyboardType', event.target.value);
  }

  return (
    <section className="sidemenu">
      <div className="sidemenu_keyboard-from">
        <span>Using</span>
        <select onChange={handleUserKeyboardChange}>
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
        <span>,</span>
      </div>
      <div className="sidemenu_keyboard-from">
        <span>Simulate</span>
        <select onChange={handleSimulationKeyboardChange}>
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
      </div>
    </section>
  );
}
