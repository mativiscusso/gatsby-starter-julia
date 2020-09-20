import React from 'react';
import useDarkMode from 'use-dark-mode';
import './Toggle.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button className="sun-theme-btn" type="button" onClick={darkMode.disable}>
      <span
        className="emoji"
        role="img"
        aria-label="moon"
        aria-hidden="true"
    >
        🌔
    </span>
      </button>
      <button className="moon-theme-btn" type="button" onClick={darkMode.enable}>
      <span
        className="emoji"
        role="img"
        aria-label="moon"
        aria-hidden="true"
    >
        🌘
    </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;