import React from 'react';
import './DetailSection.scss';

const DetailSection = ({ headingType, heading, className, children }) => {
  const SpecificHeading = headingType;

  return (
    <section className="detail__section">
      <SpecificHeading className={`heading--${headingType} ${className}`}>{heading}</SpecificHeading>
      {children}
    </section >
  )
};

export default DetailSection;