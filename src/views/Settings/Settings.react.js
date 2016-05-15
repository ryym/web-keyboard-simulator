import React from 'react';

export default function Settings(props) {
  const {
    onKeyboardTypeChange,
    userKeyboardType,
    simulationKeyboardType
  } = props;

  function handleUserKeyboardChange(event) {
    onKeyboardTypeChange('userKeyboardType', event.target.value);
  }
  function handleSimulationKeyboardChange(event) {
    onKeyboardTypeChange('simulationKeyboardType', event.target.value);
  }

  return (
    <section className="setting">
      <div className="setting-keyboard">
        <select
          className="setting-keyboard_item setting-keyboard-from"
          onChange={handleUserKeyboardChange}
          value={userKeyboardType}
        >
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
        <div className="setting-keyboard-arrow">
          →
        </div>
        <select
          className="setting-keyboard_item setting-keyboard-to"
          onChange={handleSimulationKeyboardChange}
          value={simulationKeyboardType}
        >
          <option value="US">US</option>
          <option value="DVORAK">Dvorak</option>
        </select>
      </div>
    </section>
  );
}
