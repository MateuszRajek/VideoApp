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
                <VideoCard views={views ? views : 'Data not available'} {...{ className:'list-view__card', source, videoId:id, 
                likes, title, publishedDate:releaseDate, image, favourite, onClick, setModal, setVideoId, setSource, toggleFavourite}} 
                />   
                </Col>    
              )})}
            </Row>
        )
}

export default ListView;