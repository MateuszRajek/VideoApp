import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ src }) {
  const videosList = ['video1', 'video2', 'video3']

  return (
    <>
    {console.log("videoList", src)}
    <h2>My Videos</h2>
      <Row>
      {videosList.map(video => {
        return (
          <Col>
            <VideoCard src={src} key={`${video}`}/>
          </Col>
        )
      })}
    </Row>
    </>
    
      
  );
}

export default VideosList;