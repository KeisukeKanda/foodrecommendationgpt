import React, { useState } from 'react';

const AllergyInput = (props) => {
  const [allergies, setAllergies] = useState('');

  const handleAllergyChange = (e) => {
    setAllergies(e.target.value);
    props.onAllergyChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="allergy">避けたい食材（アレルギーなど）: </label>
      <input type="text" id="allergy" value={allergies} onChange={handleAllergyChange} className="py-1 px-2"/>
    </div>
  );
};

export default AllergyInput;
