import React, { useState } from 'react';
import posed from 'react-pose';

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
  init: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    transition,
    flip: true
  },
  zoom: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true
  }
});

const ZoomImg = ({ imageWidth, imageHeight, ...props }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const zoomIn = () => {
    window.addEventListener('scroll', () => zoomOut());
    setIsZoomed(true);
  };

  const zoomOut = () => {
    window.removeEventListener('scroll', () => zoomOut());
    setIsZoomed(false);
  };

  const toggleZoom = () => (isZoomed ? zoomOut() : zoomIn());

  const pose = isZoomed ? 'zoom' : 'init';

  return (
    <div
      style={{ width: imageWidth, height: imageHeight }}
      onClick={toggleZoom}
    >
      <Frame pose={pose} className="frame" />
      <Image pose={pose} {...props} />
    </div>
  );
};

export default ZoomImg;
