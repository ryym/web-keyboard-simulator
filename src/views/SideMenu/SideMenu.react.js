import React from 'react';

export default function SideMenu() {
  return (
    <section className="sidemenu">
      <div className="sidemenu_keyboard-from">
        <span>Using</span>
        <select>
          <option>US</option>
          <option>Dvorak</option>
        </select>
        <span>,</span>
      </div>
      <div className="sidemenu_keyboard-from">
        <span>Simulate</span>
        <select>
          <option>US</option>
          <option>Dvorak</option>
        </select>
      </div>
    </section>
  );
}
