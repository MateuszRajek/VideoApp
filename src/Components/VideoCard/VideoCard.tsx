import React, { FunctionComponent } from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import { Btn } from '../Button/Button';
import './VideoCard.css';

type VideoCardProps = {
  likes: number; 
  title: string;
  views: number | string; 
  publishedDate: string; 
  image: string; 
  videoId: string;
  onClick: (prop: string) => void; 
  source: string; 
  favourite: string;
  setModal: (prop: boolean) => void;
  setVideoId: (prop: string) => void;
  setSource: (prop: string) => void;
  toggleFavourite: (prop: string) => void;
  className?: string;
}

export const VideoCard: FunctionComponent<VideoCardProps> = ({ likes, title, views, publishedDate, image, videoId, onClick, source, 
  favourite, setModal, setVideoId, setSource, toggleFavourite, className }) => {

  const toggle = (prop: boolean) => {
    setModal(prop);
  }

  const getId = (id: string) => {
    setVideoId(id);
  }

  const getSource = (source: string) => {
    setSource(source);
  }

  let text: string;

  text = favourite === 'no' ? 'Add to favourite' : 'Remove from favourite'

  return (
        <Card className={className ? className : undefined}>
          <div className={'card__wrapper'}>
            <img className='card__image' src={image} alt='video thumbnail' onClick={() => {
              toggle(true)
              getId(videoId)
              getSource(source)
              }}/>
            <CardBody>
              <CardTitle tag='h5'>{`Title: ${title}`}</CardTitle>
              <CardSubtitle tag='h6' className='mb-2 text-muted'>{`Published at: ${publishedDate.split('T')[0]}`}</CardSubtitle>
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
              <Btn {...{ color:'success', text, onClick:() => toggleFavourite(videoId) }} />
              <Btn {...{ color:'danger', text:'Remove', onClick:() => onClick(videoId) }}  />
            </div>  
        </Card>
  );
}