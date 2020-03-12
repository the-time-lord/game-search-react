import React from 'react';
import './DetailSection.scss';

const DetailSection = ({ headingType, textType, heading, text, className }) => {
  const SpecificHeading = headingType;
  const SpecificText = textType;

  return (
    <section className="detail__section">
      <SpecificHeading className={`heading--${headingType} ${className}`}>{heading}</SpecificHeading>
      {text ? (SpecificText === "a" ? (
        <a href={text} target="_blank" rel="noopener noreferrer" className={`text--${textType}`}>{text}</a>
      ) : (
        <SpecificText className={`text--${textType}`}>{text}</SpecificText>
      )) : (
        'N/A'
      )
      }
    </section >
  )
}

export default DetailSection;