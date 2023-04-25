import React, { useEffect, useState } from 'react';

const IdealWeightInput = ({ heightInCm }) => {
  const [idealWeight, setIdealWeight] = useState('');

  useEffect(() => {
    if (heightInCm) {
      const heightInMeters = heightInCm / 100;
      const calculatedIdealWeight = (heightInMeters * heightInMeters) * 22;
      setIdealWeight(calculatedIdealWeight.toFixed(2));
    }
  }, [heightInCm]);

  return (
    <div>
      <label htmlFor="idealWeight">適正体重 (kg): </label>
      <input type="text" id="idealWeight" value={idealWeight} readOnly />
    </div>
  );
};

export default IdealWeightInput;
