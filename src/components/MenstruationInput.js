// MenstruationInput.js
import React from "react";

const MenstruationInput = ({ menstruation, onMenstruationChange }) => {
  return (
    <div>
      <label htmlFor="menstruation">月経の有無:</label>
      <select
        name="menstruation"
        id="menstruation"
        value={menstruation}
        onChange={onMenstruationChange}
        className="py-1 px-2"
      >
        <option value="with">あり</option>
        <option value="without">なし</option>
      </select>
    </div>
  );
};

export default MenstruationInput;
