import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import Button from '../Button/Button';
import './VideoCard.css';

function VideoCard({ src }) {
  return (
    <div>
      {console.log("videocard", src)}
      <Card>
        <CardImg top width="100%" src={src} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default VideoCard;