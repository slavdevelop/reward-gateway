import React from 'react';

const ImageFrame = ({ imageWidth, imageHeight, ...props }) => (
  <div
    className="image-frame"
    style={{ width: imageWidth, height: imageHeight }}
  >
    <img {...props} />
  </div>
);

export default ImageFrame;
