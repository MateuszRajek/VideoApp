import React, { FunctionComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { VideoCard } from '../../VideoCard/VideoCard';

type VideosListObj = {
  source: string, 
  image: string, 
  likes: number, 
  releaseDate: string, 
  title: string, 
  views: number, 
  id: string, 
  favourite: string
}

type GridViewProps = {
  videosList: VideosListObj[];
  onClick: (prop: string) => void;
  setModal: (prop: boolean) => void;
  setVideoId: (prop: string) => void;
  setSource: (prop: string) => void;
  toggleFavourite: (prop: string) => void;
}

export const GridView: FunctionComponent<GridViewProps> = ({ videosList, onClick, setModal, setVideoId, setSource, toggleFavourite }) => {

        return (
            <Row>
             {videosList.map(video => {
              const { source, image, likes, releaseDate, title, views, id, favourite } = video;
              return (
                <Col className='card__column' key={id}>
                <VideoCard {...{ source, videoId:id, likes, title, publishedDate:releaseDate, image, 
                favourite, onClick, setModal, setVideoId, setSource, toggleFavourite, views:views ? views : 'Data not available' }} 
                />   
                </Col>    
              )})}
            </Row>
        )
}