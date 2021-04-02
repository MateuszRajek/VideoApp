import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ videoList }) {
  const videos = videoList

  return (
    <>
    <h2>My Videos</h2>
      <Row>
      {videos.map(video => {
        const { statistics } = video
        const { snippet } = video

        return (
          <Col>
            <VideoCard videoId={video.id} likes={statistics.likeCount} title={snippet.title} key={video.id} />
          </Col>
        )
      })}
    </Row>
    </>
    
  
  );
}

export default VideosList;