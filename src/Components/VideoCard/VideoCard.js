import React, { useState } from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Btn from '../Button/Button';
import './VideoCard.css';

function VideoCard({ likes, title, views, publishedDate, image, videoId, onClick, source }) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(modal ? false : true);
  }

  let src

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
    <>
      <div className="card__wrapper">
        <Card>
          <img className="card__image" src={image} alt="video thumbnail" onClick={toggle}/>
          <CardBody>
            <CardTitle tag="h5">{`Title: ${title}`}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{`Published at: ${publishedDate.split('T')[0]}`}</CardSubtitle>
            <CardText> {`Likes: ${likes}`}</CardText>
            <CardText> {`Views: ${views}`}</CardText>
            <div className='card__buttons'>
              <Btn text={'Watch a video'} onClick={toggle} />
              <Btn color={'success'} text={'Add to favourite'} />
              <Btn color={'danger'} text={'Remove'} onClick={() => onClick(videoId)} />
            </div>  
          </CardBody>
        </Card>
      </div>
      <div>
        <Modal isOpen={modal} >
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
          <iframe width="560" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </ModalBody>
          <ModalFooter>
            <Btn text='Cancel' color="danger" onClick={toggle} />
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default VideoCard;