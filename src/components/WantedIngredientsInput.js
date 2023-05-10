import React from 'react';

const WantedIngredientsInput = ({ onWantedIngredientsChange }) => {
  const handleInputChange = (e) => {
    onWantedIngredientsChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="wantedIngredients" className="text-center text-lg">今日食べたい食材</label>
      <div className="flex justify-center">
        <input
        type="text"
        id="wantedIngredients"
        onChange={handleInputChange}
        className="mt-2 w-3/4"
      />
      </div>
    </div>
  );
};

export default WantedIngredientsInput;
