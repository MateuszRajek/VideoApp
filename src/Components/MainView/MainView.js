import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import VideosList from '../VideosList/VideosList';
import VideoModal from '../VideoModal/VideoModal';
import { fetchYoutubeData } from '../../VideosSources/YouTube';
import { fetchVimeoData } from '../../VideosSources/Vimeo';
import './MainView.css';

function MainView() {
  const [inputValue, setInputValue] = useState('');
  const [videosList, setVideoList] = useState([]);
  const [videoSource, setVideoSource] = useState('Choose video source');
  const [modal, setModal] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [source, setSource] = useState('');
  const [favouriteVideosList, setFavouriteList] = useState([]);
  
  const onButtonSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      alert('PLEASE INSERT FULL VIDEO URL OR VIDEO ID');
    } else getAndRenderMyVideos();
  }
  
  const onInputChange = event => {
  setInputValue(event.target.value);
  }

  const chooseVideoSource = event => {
    setVideoSource(event.target.innerText);
  }

  const addVideoToLocalStorage = (id, video) => {
    localStorage.setItem(`video-id: ${id}`, JSON.stringify(video));
  }

  const getItemsFromLocalStorage = () => {
    const video = [];
  
    for (let item in localStorage) {
      if(localStorage.hasOwnProperty(item) && item.startsWith('video-id')) {
        const itemsFromLocalStorage = localStorage.getItem(item);
        video.push(JSON.parse(itemsFromLocalStorage));
      }  
    }
    setVideoList(video);
  } 

  const removeItemFromLocalStorage = id => {
    localStorage.removeItem(`video-id: ${id}`);
  }

  const deleteVideo = id => {
    removeItemFromLocalStorage(id);
    reRenderVideoList();
  }

  const reRenderVideoList = () => {
    getItemsFromLocalStorage();
    updateFavouriteVideosList();
  }
  
  const getAndRenderMyVideos = async () => {

    let video = {
      source: '',
      title: '',
      image: '',
      releaseDate: '',
      likes: '',
      views: '',
      id: '',
      favourite: 'no',
    }

    switch(videoSource) {
      case 'YouTube':
        fetchYoutubeData(inputValue, setVideoList, addVideoToLocalStorage, setInputValue, videoSource, videosList, video)
        break;
      case 'Vimeo':
        fetchVimeoData(inputValue, setVideoList, addVideoToLocalStorage, setInputValue, videoSource, videosList, video)
        break;
        case 'Choose video source':
          alert('YOU HAVE TO CHOOSE ONE OF THE SOURCES AVAILABLE');
          break;
        default :
    }    
    reRenderVideoList();
  } 

  const toggleFavouriteVideo = id => {
    for (let item in localStorage) {
      if(localStorage.hasOwnProperty(item) && item === `video-id: ${id}`) {
        const itemFromLocalStorage = localStorage.getItem(item);
        let video = JSON.parse(itemFromLocalStorage);
        video.favourite === 'yes' ? video.favourite = 'no' : video.favourite = 'yes';
        localStorage.setItem(`video-id: ${id}`, JSON.stringify(video));
      }  
    }
    reRenderVideoList();
    updateFavouriteVideosList();
  }

  const updateFavouriteVideosList = () => {
    const favourite = [];
  
    for (let item in localStorage) {
      if(localStorage.hasOwnProperty(item) && item.startsWith('video-id')) {
        const itemsFromLocalStorage = localStorage.getItem(item);
        const video = JSON.parse(itemsFromLocalStorage);
        if(video.favourite === 'yes'){
          favourite.push(video);
        }
      }  
    }
    setFavouriteList(favourite);
  }

  const deleteAllVideos = () => {
    if (window.confirm("Are you sure?")) {
      localStorage.clear();
      reRenderVideoList();
    }    
  }

  useEffect(reRenderVideoList, [])

  return (
    <Container>
      <section className='search__bar'>
        <SearchView {...{ onChange:onInputChange, onSubmit:onButtonSubmit, onClick:chooseVideoSource, source:videoSource, inputValue }} />
      </section>
      <section className='featured-videos'>
       <FeaturedVideos />
      </section>
      <section className='user-videos'>
      <VideosList {...{ videoList:videosList, videoSource, onClick:deleteVideo, setModal, setVideoId, 
      setSource, toggleFavourite:toggleFavouriteVideo, deleteAllVideos, favouriteVideosList }}
      />
      </section>
      <VideoModal {...{ modal, setModal, videoId, source }} />
     </Container>
  );
}

export default MainView;