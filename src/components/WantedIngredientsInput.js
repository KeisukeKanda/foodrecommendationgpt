import React from 'react';

const WantedIngredientsInput = ({ onWantedIngredientsChange }) => {
  const handleInputChange = (e) => {
    onWantedIngredientsChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="wantedIngredients">今日食べたい食材: </label>
      <input
        type="text"
        id="wantedIngredients"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default WantedIngredientsInput;
