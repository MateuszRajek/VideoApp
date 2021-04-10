import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Btn from '../Button/Button';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ videoList, onClick, setModal, setVideoId, setSource, toggleFavourite, favouriteVideosList }) {
  const [isFavourite, setFavourite] = useState(false)
  const [active, setActive] = useState('All Videos')
  const videos = videoList;
  const favouriteVideos = favouriteVideosList;
  const buttons = ['All Videos', 'Favourite Videos']

  const updateStates = button => {
    setActive(button)
    let favourite
    switch(button) {
      case 'All Videos':
        favourite = false
        break;
      case 'Favourite Videos':
        favourite = true;
        break;
        default:
          favourite = false;
    }
    setFavourite(favourite)
  }

  return (
    <>
    {buttons.map(button => {
      return (
        <Btn text={button} size={button === active && 'lg'} className={'videos-list__btn'} onClick={() => updateStates(button)} />
      )
    })}
      <Row>
      {!isFavourite && videos.map(video => {
       const { source, image, likes, releaseDate, title, views, id, favourite} = video
        return (
          <Col className="card__column" key={id}>
            <VideoCard 
              source={source}
              videoId={id}
              likes={likes}  
              title={title} 
              views={views? views : 'Data not found'}
              publishedDate={releaseDate}
              image={image}
              favourite={favourite}
              onClick={() => onClick(id)}
              setModal={setModal}
              setVideoId={setVideoId}
              setSource={setSource}
              toggleFavourite={toggleFavourite}
            />
          </Col>
        )
      })}
      {isFavourite && favouriteVideos.map(video => {
        const { source, image, likes, releaseDate, title, views, id, favourite} = video
        return (
          <Col className="card__column" key={id}>
            <VideoCard 
              source={source}
              videoId={id}
              likes={likes}  
              title={title} 
              views={views? views : 'Data not found'}
              publishedDate={releaseDate}
              image={image}
              favourite={favourite}
              onClick={() => onClick(id)}
              setModal={setModal}
              setVideoId={setVideoId}
              setSource={setSource}
              toggleFavourite={toggleFavourite}
            />
          </Col>
        )
      })}
    </Row>
    </>
  );
}

export default VideosList;