import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Btn from '../Button/Button';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ videoList, onClick, setModal, setVideoId, setSource, toggleFavourite, favouriteVideosList }) {
  const [isFavourite, setFavourite] = useState(false)
  const videos = videoList;
  const favouriteVideos = favouriteVideosList;

  return (
    <>
    <Btn text={"All Videos"} className={'videos-list__btn'} onClick={() => setFavourite(false)} />
    <Btn text={"Favourite Videos"} className={'videos-list__btn'} onClick={() => setFavourite(true)} />
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