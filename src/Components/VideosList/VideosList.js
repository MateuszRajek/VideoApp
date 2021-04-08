import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ videoList, onClick }) {
  const videos = videoList
  
  return (
    <>
    <h2>My Videos</h2>
      <Row>
      {videos.map(video => {
       const { image, likes, releaseDate, title, views, id} = video
        return (
          <Col className="card__column" key={id}>
            <VideoCard 
             videoId={id}
             likes={likes}  
             title={title} 
             views={views? views : 'Data not found'}
             publishedDate={releaseDate}
             image={image}
             onClick={() => onClick(id)}
             />
          </Col>
        )
      })}
    </Row>
    </>
  );
}

export default VideosList;