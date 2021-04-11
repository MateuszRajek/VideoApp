import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Btn from '../Button/Button';
import './VideoModal.css';

function VideoModal({ source, modal, title, videoId, setModal }) {

  const toggle = prop => {
    setModal(prop);
  }

  let src;

  switch(source) {
    case 'youtube':
      src = `https://www.youtube.com/embed/${videoId}`;
      break;
    case 'vimeo':
      src = `https://player.vimeo.com/video/${videoId}`;
      break;
    default:
  }

  return (
      <div>
        <Modal isOpen={modal} >
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
          <iframe width="100%" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </ModalBody>
          <ModalFooter>
            <Btn text='Cancel' color="danger" onClick={() => toggle(false)} />
          </ModalFooter>
        </Modal>
      </div>
  );
}

export default VideoModal;