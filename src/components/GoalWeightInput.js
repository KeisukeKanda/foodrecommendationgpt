import React from 'react';

const GoalWeightInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="goalWeight">あなたが目標とする体重 (kg): </label>
      <input
        type="number"
        id="goalWeight"
        min="1"
        max="300"
        step="0.1"
        onChange={onChange}
        className="py-1 px-2"
      />
    </div>
  );
};

export default GoalWeightInput;
