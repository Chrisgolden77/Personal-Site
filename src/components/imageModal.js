import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ImageModal = ({ images, handleClose }) => {
  const [currentImage, setCurrentImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    if (images.length) {
      setCurrentImage(images[imageIndex]);
    }
  }, [imageIndex, images]);

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
  const handleIndexChange = next => {
    if (next && images.length === imageIndex + 1) {
      return setImageIndex(0);
    }
    if (!next && imageIndex === 0) return setImageIndex(images.length - 1);
    return next ? setImageIndex(imageIndex + 1) : setImageIndex(imageIndex - 1);
  };
  return (
    <div
      style={{
        ...modalStyle,
        display: images.length ? 'flex' : 'none',
      }}
    >
      <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {images.length > 1 && (
          <>
            <button
              className="image-buttons"
              onClick={() => handleIndexChange({ next: false })}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="image-buttons"
              onClick={() => handleIndexChange({ next: true })}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>

      <button className="image-modal-button" onClick={() => handleClose()}>
        X
      </button>
      <div>
        <img
          alt={`Screen Shot of ${currentImage}`}
          src={currentImage}
          style={{ height: 'auto', width: '90vw', maxWidth: '1100px' }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
