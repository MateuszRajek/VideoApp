import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import Btn from '../Button/Button';
import './VideoCard.css';

function VideoCard({ likes, title, views, publishedDate, image, videoId, onClick, source, favourite, setModal, setVideoId, setSource, toggleFavourite, className }) {

  const toggle = prop => {
    setModal(prop);
  }

  const getId = id => {
    setVideoId(id)
  }

  const getSource = source => {
    setSource(source)
  }

  let text

  switch(favourite) {
    case 0:
      text = "Add to favourite";
      break;
    case 1:
      text = "Remove from favourite";
      break;
    default:
      text = "favourite";
  }

  return (
        <Card className={className ? className : null}>
          <div className={'card__wrapper'}>
            <img className="card__image" src={image} alt="video thumbnail" onClick={() => {
              toggle(true)
              getId(videoId)
              getSource(source)
              }}/>
            <CardBody>
              <CardTitle tag="h5">{`Title: ${title}`}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{`Published at: ${publishedDate.split('T')[0]}`}</CardSubtitle>
              <CardText> {`Likes: ${likes}`}</CardText>
              <CardText> {`Views: ${views}`}</CardText> 
            </CardBody>
          </div>
          
          <div className='card__buttons'>
              <Btn text={'Watch a video'} onClick={() => {
                toggle(true)
                getId(videoId)
                getSource(source)
                }} />
              <Btn color={'success'} text={text} onClick={() => toggleFavourite(videoId)} />
              <Btn color={'danger'} text={'Remove'} onClick={() => onClick(videoId)} />
            </div>  
        </Card>
  );
}

export default VideoCard;