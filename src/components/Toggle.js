import React from 'react';
import './Toggle.scss'

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
      name="dmcheck"
    />
    <label htmlFor="dmcheck">
    </label>
  </span>
);

export default Toggle;