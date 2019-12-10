import React, { useState } from 'react';

import posed from 'react-pose';

const Image = posed.img({
  zoomedIn: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true
  },
  zoomedOut: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    flip: true
  }
});

const Frame = posed.div({
  zoomedIn: {
    applyAtStart: { display: 'block' },
    opacity: 1
  },
  zoomedOut: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  }
});

const Zoomer = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = () => setIsZoomed(!isZoomed);

  const pose = isZoomed ? 'zoomedIn' : 'zoomedOut';

  return (
    <div className="zoomer" onClick={handleChange}>
      <Frame pose={pose} className="frame" />
      <Image pose={pose} />
    </div>
  );
};
