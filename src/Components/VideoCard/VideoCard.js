import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import './VideoCard.css';

function VideoCard({ likes, title, views, publishedDate, image }) {
  
  return (
    <div className="card__wrapper">
      <Card>
       <img className="card__image" src={image} alt="video thumbnail" />
        <CardBody>
          <CardTitle tag="h5">{`Title: ${title}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{`Published at: ${publishedDate.split('T')[0]}`}</CardSubtitle>
          <CardText> {`Likes: ${likes}`}</CardText>
          <CardText> {`Views: ${views}`}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default VideoCard;