import React from 'react';

const WeightInput = ({ selectedWeight, onWeightChange }) => {
  return (
    <div>
      <label htmlFor="weight">体重 (kg): </label>
      <input
        id="weight"
        type="number"
        min="1"
        max="300"
        step="0.1"
        value={selectedWeight}
        onChange={onWeightChange}
      />
    </div>
  );
};

export default WeightInput;
