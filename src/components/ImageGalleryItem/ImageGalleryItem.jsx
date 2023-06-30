import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = event => {
    const { dataset, nodeName } = event.target;

    if (
      event.code === 'Escape' ||
      (dataset.backdrop && nodeName !== 'IMG') ||
      dataset.openModal
    ) {
      return setModalOpen(!modalOpen);
    }

    if (nodeName === 'IMG') {
      return;
    }
  };

  return (
    <>
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          data-open-modal
          loading="lazy"
          onClick={toggleModal}
        />
      </GalleryItem>
      {modalOpen && (
        <Modal imageURL={largeImageURL} toggleModal={toggleModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};