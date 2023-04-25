import React from 'react';

const AllergyInput = () => {
  return (
    <div>
      <label htmlFor="allergy">避けたい食材（アレルギーなど）: </label>
      <input type="text" id="allergy" />
    </div>
  );
};

export default AllergyInput;
