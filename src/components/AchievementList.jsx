import React from 'react';
import AchievementItem from './AchievementItem';

const AchievementList = ({ achievements })  => {
  const renderedList = achievements.map(achievement => {
    return (
      <AchievementItem 
        key={achievement.id}
        achievement={achievement}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default AchievementList;