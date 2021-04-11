import React, { useState } from 'react';
import Btn from '../Button/Button';
import PaginationComponent from '../Pagination';
import GridIcon from '../../assets/icons/icons8-grid-view.png';
import ListIcon from '../../assets/icons/icons8-list-view.png';
import './VideosList.css';
import GridView from './GridView/GridView';
import ListView from './ListView/ListView';

function VideosList({ videoList, onClick, setModal, setVideoId, setSource, toggleFavourite, favouriteVideosList }) {
  const [isFavourite, setFavourite] = useState(false)
  const [active, setActive] = useState('All Videos')
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);
  const [displayView, setDisplayView] = useState('grid');
  const buttons = ['All Videos', 'Favourite Videos']
  const videosList = isFavourite ? favouriteVideosList : videoList;
  const icons = ['grid', 'list'];

  const updateStates = button => {
    setActive(button)
    let favourite
    switch(button) {
      case 'All Videos':
        favourite = false
        break;
      case 'Favourite Videos':
        favourite = true;
        setCurrentPage(1)
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

  let iconClassName
  const toggleDisplay = icon => {
    icon === 'list' ? setDisplayView('list') : setDisplayView('grid');
    
    
  }

  return (
    <>
    <nav>
      {buttons.map(button => {
        return (
          <Btn key={button} text={button} size={button === active ? 'lg' : '' } className={'videos-list__btn'} onClick={() => updateStates(button)} />
        )
      })}
      {icons.map(icon => {
        return (
          <Btn color={'link'} icon={icon === 'list' ? ListIcon : GridIcon} className={`views__icons ${icon === displayView ? 'active' : ''}`} onClick={() => toggleDisplay(icon)} />
        )
      })}
    </nav>
          {displayView === 'grid' && <GridView 
            videosList={currentVideos}
            onClick={onClick}
            setModal={setModal}
            setVideoId={setVideoId}
            setSource={setSource}
            toggleFavourite={toggleFavourite}
          />}  
          {displayView === 'list' && <ListView 
            videosList={currentVideos}
            onClick={onClick}
            setModal={setModal}
            setVideoId={setVideoId}
            setSource={setSource}
            toggleFavourite={toggleFavourite}
          />}    
    <PaginationComponent videosPerPage={videosPerPage} totalVideos={videosList.length} paginate={paginate} firstPage={isFavourite} />
    </>
  );
}

export default VideosList;