import React from 'react';

const ActivityLevelSelect = ({ onActivityLevelChange }) => {
  return (
    <div>
      <label htmlFor="activity-level">活動レベル：</label>
      <select
        id="activity-level"
        onChange={(e) => onActivityLevelChange(e)}
        className="py-1 px-2"
      >
        <option value="1">ほとんど運動しない</option>
        <option value="2">週に1〜3日程度運動する</option>
        <option value="3">週に3〜5日程度運動する</option>
        <option value="4">週に6〜7日程度運動する</option>
        <option value="5">肉体労働者または競技者</option>
      </select>
    </div>
  );
};

export default ActivityLevelSelect;
