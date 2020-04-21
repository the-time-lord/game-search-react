import React from 'react';

const DetailLink = ({ text, url }) => {
  return (
    url ? <a href={url} target="_blank" rel="noopener noreferrer" className="text--a">{text}</a> : 'N/A'
  );
};

export default DetailLink;
