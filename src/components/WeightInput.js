import React from 'react';

const WeightInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="weight">体重 (kg): </label>
      <input
        id="weight"
        type="number"
        min="1"
        max="300"
        step="0.1"
        onChange={onChange}
        className="py-1 px-2 w-20"
      />
    </div>
  );
};

export default WeightInput;
