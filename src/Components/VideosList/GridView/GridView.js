import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../../VideoCard/VideoCard';
import './GridView.css';

function GridView({ videosList, onClick, setModal, setVideoId, setSource, toggleFavourite }) {

        return (
            <Row>
             {videosList.map(video => {
              const { source, image, likes, releaseDate, title, views, id, favourite} = video
              return (
                <Col className="card__column" key={id}>
                <VideoCard 
                  source={source}
                  videoId={id}
                  likes={likes}  
                  title={title} 
                  views={views ? views : 'Data not available'}
                  publishedDate={releaseDate}
                  image={image}
                  favourite={favourite}
                  onClick={onClick}
                  setModal={setModal}
                  setVideoId={setVideoId}
                  setSource={setSource}
                  toggleFavourite={toggleFavourite}
                />   
                </Col>    
              )})}
            </Row>
        )
}

export default GridView;