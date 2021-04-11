import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import { getYouTubeVideoInfo, getVimeoVideoInfo, getVimeoDetailedInfo } from '../../requests.js';
import VideosList from '../VideosList/VideosList';
import VideoModal from '../VideoModal/VideoModal';
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
      favourite: 0,
    }

    switch(videoSource) {
      case 'YouTube':
        await getYouTubeVideoInfo(inputValue).then(resp => {
          const { items } = resp.data;
          const videoData = items[0];
          const { title, publishedAt, thumbnails } = videoData.snippet;
          const { likeCount, viewCount } = videoData.statistics;
          const id = videoData.id;
          video = { ...video, source: videoSource.toLowerCase(), title: title, image: thumbnails.medium.url, 
            releaseDate: publishedAt.split('T')[0], likes: likeCount, views: viewCount, id: id };
          setVideoList([...videosList, video]);
        }).catch(error => alert(`${error.message} | Please check if your API key, video url or video id are correct`));
        break;
      case 'Vimeo':
        await getVimeoVideoInfo(inputValue).then(async resp => {
          const { title, upload_date, thumbnail_url, video_id } = resp.data;
          video = { ...video, source: videoSource.toLowerCase(), title: title, image: thumbnail_url, 
            releaseDate: upload_date.split(' ')[0], id: video_id };
          await getVimeoDetailedInfo(video_id).then(async resp => {
            const likes = resp.data.data[0].metadata.connections.likes.total;
            video = { ...video, likes: likes };
            setVideoList([...videosList, video]);
          })  
        }).catch(error => alert(`${error.message} | Please check if your API key, video url or video id are correct`));
        break;
        case 'Choose video source':
          alert('YOU HAVE TO CHOOSE ONE OF THE SOURCES AVAILABLE');
          break;
        default :
    }   

    addVideoToLocalStorage(video.id, video);
    reRenderVideoList();
  } 

  const toggleFavouriteVideo = id => {
    for (let item in localStorage) {
      if(localStorage.hasOwnProperty(item) && item === `video-id: ${id}`) {
        const itemFromLocalStorage = localStorage.getItem(item);
        let video = JSON.parse(itemFromLocalStorage);
        video.favourite === 1 ? video.favourite = 0 : video.favourite = 1;
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
        if(video.favourite === 1){
          favourite.push(video);
        }
      }  
    }
    setFavouriteList(favourite);
  }

  useEffect(reRenderVideoList, [])

  return (
    <Container>
      <section className='search__bar'>
        <SearchView 
        onChange={onInputChange} 
        onSubmit={onButtonSubmit} 
        onClick={chooseVideoSource} 
        source={videoSource} 
        />
      </section>
      <section className='featured-videos'>
       <FeaturedVideos />
      </section>
      <section className='user-videos'>
      <VideosList videoList={videosList} 
      videoSource={videoSource} 
      onClick={deleteVideo} 
      setModal={setModal} 
      setVideoId={setVideoId} 
      setSource={setSource} 
      toggleFavourite={toggleFavouriteVideo}
      favouriteVideosList={favouriteVideosList}
      />
      </section>
      <VideoModal modal={modal} setModal={setModal} videoId={videoId} source={source} />
     </Container>
  );
}

export default MainView;