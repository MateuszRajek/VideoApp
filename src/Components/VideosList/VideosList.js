import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ videoList, onClick, setModal, setVideoId, setSource }) {
  const videos = videoList

  return (
    <>
    <h2>My Videos</h2>
      <Row>
      {videos.map(video => {
       const { source, image, likes, releaseDate, title, views, id } = video
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
              onClick={() => onClick(id)}
              setModal={setModal}
              setVideoId={setVideoId}
              setSource={setSource}
            />
          </Col>
        )
      })}
    </Row>
    </>
  );
}

export default VideosList;