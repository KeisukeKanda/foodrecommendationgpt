import React from 'react';

const GoalWeightInput = () => {
  return (
    <div>
      <label htmlFor="goalWeight">あなたが目標とする体重 (kg): </label>
      <input type="number" id="goalWeight" min="1" max="300" step="0.1" />
    </div>
  );
};

export default GoalWeightInput;
