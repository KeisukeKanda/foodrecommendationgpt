import React from 'react';

const HeightInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="height">身長 (cm): </label>
      <input type="number" id="height" name="height" onChange={onChange} className="py-1 px-2 w-20"/>
    </div>
  );
};

export default HeightInput;
