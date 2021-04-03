import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import './VideoCard.css';

function VideoCard({ likes, dislikes, title, views, publishedDate, image }) {
  
  return (
    <div>
      <Card>
       <img width={image.width} src={image.url} alt="video thumbnail" />
        <CardBody>
          <CardTitle tag="h5">{`Title: ${title}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{`Published at: ${publishedDate.split('T')[0]}`}</CardSubtitle>
          <CardText> {`Likes: ${likes}`}</CardText>
          <CardText> {`Dislikes: ${dislikes}`}</CardText>
          <CardText> {`Views: ${views}`}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default VideoCard;