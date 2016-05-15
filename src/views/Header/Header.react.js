import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header_brand">
        Keyboard Simulator
      </div>
      <nav className="header_nav">
        <ul className="header_nav-list">
          <li className="header_nav-item link-github">
            <a href="https://github.com/ryym/web-keyboard-simulator">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
