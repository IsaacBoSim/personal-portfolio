import React from 'react';

export const SkillCard = ({ imageSrc, title }) => {
  return (
    <div className="item">
      <img src={imageSrc} alt={`${title} Icon`} />
      <h5>{title}</h5>
    </div>
  );
};
