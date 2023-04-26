import React from 'react';

const GenderSelect = ({ gender, onGenderChange }) => {
  return (
    <div>
      <label htmlFor="gender">性別: </label>
      <select
        id="gender"
        value={gender}
        onChange={onGenderChange}
      >
        <option value="male">男性</option>
        <option value="female">女性</option>
      </select>
    </div>
  );
};

export default GenderSelect;
