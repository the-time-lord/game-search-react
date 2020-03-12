import React from 'react';
import './ScreenshotList.scss'
import Screenshot from './Screenshot';

const ScreenshotList = ({ screenshots }) => {
  const renderedList = screenshots.map(screenshot => {
    return (
      <Screenshot
        key={screenshot.id}
        screenshot={screenshot}
      />
    )
  })

  return <div className="screenshot-list-wrapper">{renderedList}</div>;
}

export default ScreenshotList; 