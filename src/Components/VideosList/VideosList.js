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
        const { statistics, snippet } = video
        const { title, publishedAt, thumbnails } = snippet
        const { likeCount, dislikeCount, viewCount } = statistics
        return (
          <Col>
            <VideoCard videoId={video.id}
             likes={likeCount} 
             dislikes={dislikeCount} 
             title={title} 
             views={viewCount}
             publishedDate={publishedAt}
             image={thumbnails.medium}
             key={video.id} 
             />
          </Col>
        )
      })}
    </Row>
    </>
    
  
  );
}

export default VideosList;