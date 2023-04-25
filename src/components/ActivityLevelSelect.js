import React from 'react';

const ActivityLevelSelect = () => {
  return (
    <div>
      <label htmlFor="activityLevel">身体活動レベル: </label>
      <select id="activityLevel">
        <option value="1">1. ほとんど運動しない（座っているか寝ている）</option>
        <option value="2">2. 軽い運動（週に1-3日の運動）</option>
        <option value="3">3. 中程度の運動（週に3-5日の運動）</option>
        <option value="4">4. 激しい運動（週に6-7日の運動）</option>
        <option value="5">5. 非常に激しい運動（毎日、数回の運動や競技スポーツなど）</option>
      </select>
    </div>
  );
};

export default ActivityLevelSelect;
