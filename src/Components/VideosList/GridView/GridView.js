import React from 'react';
import { Col, Row } from 'reactstrap';
import VideoCard from '../../VideoCard/VideoCard';

function GridView({ videosList, onClick, setModal, setVideoId, setSource, toggleFavourite }) {

        return (
            <Row>
             {videosList.map(video => {
              const { source, image, likes, releaseDate, title, views, id, favourite} = video;
              return (
                <Col className='card__column' key={id}>
                <VideoCard views={views ? views : 'Data not available'} {...{ source, videoId:id, likes, title, publishedDate:releaseDate, image, 
                favourite, onClick, setModal, setVideoId, setSource, toggleFavourite}} 
                />   
                </Col>    
              )})}
            </Row>
        )
}

export default GridView;