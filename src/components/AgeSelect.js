// src/components/AgeSelect.js
import React from 'react';

const AgeSelect = ({ age, onAgeChange }) => {
  return (
    <div>
      <label htmlFor="age">年齢: </label>
      <select id="age" value={age} onChange={onAgeChange}>
        {Array.from({ length: 73 }, (_, i) => i + 18).map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgeSelect;
