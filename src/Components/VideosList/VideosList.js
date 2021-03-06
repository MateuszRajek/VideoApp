import React, { useState } from 'react';
import Btn from '../Button/Button';
import PaginationComponent from '../Pagination';
import GridIcon from '../../assets/icons/icons8-grid-view.png';
import ListIcon from '../../assets/icons/icons8-list-view.png';
import './VideosList.css';
import GridView from './GridView/GridView';
import ListView from './ListView/ListView';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';

function VideosList({ videoList, onClick, setModal, setVideoId, setSource, toggleFavourite, favouriteVideosList, deleteAllVideos }) {
  const [isFavourite, setFavourite] = useState(false);
  const [active, setActive] = useState('All Videos');
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);
  const [displayView, setDisplayView] = useState('grid');
  const [sortBy, setSortBy] = useState('');
  const buttons = ['All Videos', 'Favourite Videos'];
  const videosList = isFavourite ? favouriteVideosList : videoList;
  const icons = ['grid', 'list'];
  const sortByItems = ['Default', 'Newest', 'Oldest'];

  const sortedByNewestVideos = [...videosList].sort(function compare(b, a) {
    const dateA = new Date(a.releaseDate);
    const dateB = new Date(b.releaseDate);
  return dateA - dateB;
})

  const sortedByOldestVideos = [...videosList].sort(function compare(a, b) {
    const dateA = new Date(a.releaseDate);
    const dateB = new Date(b.releaseDate);
  return dateA - dateB;
  })

  const updateStates = button => {
    setActive(button);
    let favourite;
    switch(button) {
      case 'All Videos':
        favourite = false;
        break;
      case 'Favourite Videos':
        favourite = true;
        setCurrentPage(1)
        break;
        default:
          favourite = false;
    }
    setFavourite(favourite);
  }

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;

  let currentVideos;

  switch (sortBy) {
    case 'Oldest':
      currentVideos = sortedByOldestVideos.slice(indexOfFirstVideo, indexOfLastVideo);
      break;
    case 'Newest':
      currentVideos = sortedByNewestVideos.slice(indexOfFirstVideo, indexOfLastVideo);
      break;
    case 'Default':
      currentVideos = videosList.slice(indexOfFirstVideo, indexOfLastVideo);
      break;
      default: 
      currentVideos = videosList.slice(indexOfFirstVideo, indexOfLastVideo);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const toggleDisplay = icon => {
    icon === 'list' ? setDisplayView('list') : setDisplayView('grid');
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
    <nav>
      {buttons.map(button => {
        return (
          <Btn {...{ key:button, text:button, className:'list__btn', size:button === active ? 'lg' : '', onClick:() => updateStates(button) }} />
        )
      })}
      {icons.map(icon => {
        return (
          <Btn {...{ key:icon, color:'link' }}
          icon={icon === 'list' ? ListIcon : GridIcon} 
          className={`views__icons ${icon === displayView ? 'active' : ''}`} 
          onClick={() => toggleDisplay(icon)} />
        )
      })}
        <Dropdown {...{ className:'sort-by-dropdown', isOpen:dropdownOpen, toggle }}>
          <DropdownToggle caret>
            {'Sort'}
          </DropdownToggle>
          <DropdownMenu>
            {sortByItems.map(item => {
              return(
                <DropdownItem key={item} onClick={() => setSortBy(item)}>{item}</DropdownItem>
              )
            })}
          </DropdownMenu>
        </Dropdown>
        <Btn {...{ color:'danger', text:'Delete All Videos' }} onClick={() => deleteAllVideos()}/>
    </nav>
          {displayView === 'grid' && <GridView {...{ videosList:currentVideos, onClick, setModal, setVideoId, setSource, toggleFavourite }} />}  
          {displayView === 'list' && <ListView {...{ videosList:currentVideos, onClick, setModal, setVideoId, setSource, toggleFavourite }} />}    
    <PaginationComponent {...{ videosPerPage, totalVideos:videosList.length, paginate, firstPage:isFavourite }} />
    </>
  );
}

export default VideosList;