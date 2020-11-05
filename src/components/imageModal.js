// import { chevronLeft, chevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ImageModal = ({ images, handleClose }) => {
  const [currentImage, setCurrentImage] = useState('');
  // const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    if (images.length) {
      setCurrentImage(images[0]);
    }
  }, [images, images.length]);

  const modalStyle = {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100vw',
  };

  return (
    <div
      style={{
        ...modalStyle,
        display: images.length ? 'flex' : 'none',
      }}
    >
      <button className="image-modal-button" onClick={() => handleClose()}>
        X
      </button>
      <div>
        {/* <button
          onClick={() => images.length > 1 && setImageIndex(imageIndex--)}
          style={{
            background: 'none',
            height: '100px',
            width: '50px',
            position: 'fixed',
            left: '2px',
            top: '40%',
            color: 'white',
            border: 'none',
            fontSize: 'xx-large',
          }}
        >
        </button> */}
        <img
          alt={`Screen Shot of ${currentImage}`}
          src={currentImage}
          style={{ height: 'auto', width: '90vw', maxWidth: '1100px' }}
        />
        {/* <button
          onClick={() => images.length > 1 && setImageIndex(imageIndex++)}
          style={{
            background: 'none',
            height: '100px',
            width: '50px',
            position: 'fixed',
            right: '2px',
            top: '50%',
            color: 'white',
            border: 'none',
            fontSize: '16px',
          }}
        >
        </button> */}
      </div>
    </div>
  );
};

export default ImageModal;
