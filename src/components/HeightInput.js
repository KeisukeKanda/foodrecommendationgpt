import React from 'react';

const HeightInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="height">身長 (cm): </label>
      <input type="number" id="height" name="height" onChange={onChange} />
    </div>
  );
};

export default HeightInput;
