import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../../VideoCard/VideoCard';
import './ListView.css';

function ListView({ videosList, onClick, setModal, setVideoId, setSource, toggleFavourite }) {

        return (
            <Row className={'list-view__row'}>
             {videosList.map(video => {
              const { source, image, likes, releaseDate, title, views, id, favourite} = video;
              return (
                <Col className="card__column list-view__column" key={id}>
                <VideoCard className={'list-view__card'}
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

export default ListView;