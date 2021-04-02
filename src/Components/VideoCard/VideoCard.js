import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import Button from '../Button/Button';
import './VideoCard.css';

function VideoCard({ videoId, likes, title }) {
  
  return (
    <div>
      <Card>
      <iframe width="480" height="270" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        <CardBody>
          <CardTitle tag="h5">{`Title: ${title}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText> {`likes: ${likes}`}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default VideoCard;