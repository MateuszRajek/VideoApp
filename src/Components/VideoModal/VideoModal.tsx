import React, { FunctionComponent } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Btn } from '../Button/Button';
import './VideoModal.css';


type ModalProps = {
  source: string;
  modal: boolean;
  title: string;
  videoId: string;
  setModal: (prop: boolean) => void;
}

export const VideoModal: FunctionComponent<ModalProps> = ({ source, modal, title, videoId, setModal }) => {

  const toggle = (prop: boolean) => {
    setModal(prop);
  }

  let src: string | undefined;

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
          <iframe width='100%' height='315' src={src} title='YouTube video player' 
          frameBorder='0' allow='accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture'>
          </iframe>
          </ModalBody>
          <ModalFooter>
            <Btn {...{ text: 'Cancel', color:'danger', onClick:() => toggle(false) }} />
          </ModalFooter>
        </Modal>
      </div>
  );
}