import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Btn from '../Button/Button';
import PaginationComponent from '../Pagination';
import VideoCard from '../VideoCard/VideoCard';
import './VideosList.css';

function VideosList({ videoList, onClick, setModal, setVideoId, setSource, toggleFavourite, favouriteVideosList }) {
  const [isFavourite, setFavourite] = useState(false)
  const [active, setActive] = useState('All Videos')
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);
  const buttons = ['All Videos', 'Favourite Videos']
  const videosList = isFavourite ? favouriteVideosList : videoList;

  const updateStates = button => {
    setActive(button)
    let favourite
    switch(button) {
      case 'All Videos':
        favourite = false
        break;
      case 'Favourite Videos':
        favourite = true;
        break;
        default:
          favourite = false;
    }
    setFavourite(favourite)
  }

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videosList.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
    {buttons.map(button => {
      return (
        <Btn key={button} text={button} size={button === active ? 'lg' : '' } className={'videos-list__btn'} onClick={() => updateStates(button)} />
      )
    })}
      <Row>
      {currentVideos.map(video => {
       const { source, image, likes, releaseDate, title, views, id, favourite} = video
        return (
          <Col className="card__column" key={id}>
            <VideoCard 
              source={source}
              videoId={id}
              likes={likes}  
              title={title} 
              views={views? views : 'Data not found'}
              publishedDate={releaseDate}
              image={image}
              favourite={favourite}
              onClick={() => onClick(id)}
              setModal={setModal}
              setVideoId={setVideoId}
              setSource={setSource}
              toggleFavourite={toggleFavourite}
            />
          </Col>
        )})}
        
    </Row>
    <PaginationComponent videosPerPage={videosPerPage} totalVideos={videosList.length} paginate={paginate} />
    </>
  );
}

export default VideosList;