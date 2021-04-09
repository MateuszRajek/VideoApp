import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import { getYouTubeVideoInfo, getVimeoVideoInfo, getVimeoDetailedInfo } from '../../requests.js';
import VideosList from '../VideosList/VideosList';
import './MainView.css';
import VideoModal from '../VideoModal/VideoModal';

function MainView() {
  const [inputValue, setInputValue] = useState('');
  const [videosList, setVideoList] = useState([]);
  const [videoSource, setVideoSource] = useState('Choose video source');
  const [modal, setModal] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [source, setSource] = useState('')
  
  const onButtonSubmit = event => {
    event.preventDefault();
    getAndRenderMyVideos();
  }
  
  const onInputChange = event => {
  setInputValue(event.target.value);
  }

  const chooseVideoSource = event => {
    setVideoSource(event.target.innerText);
  }

  const addVideoToLocalStorage = (id, video) => {
    localStorage.setItem(`video-id: ${id}`, JSON.stringify(video))
  }

  const getItemsFromLocalStorage = () => {
    let video = []
  
    for (let item in localStorage) {
      if(localStorage.hasOwnProperty(item) && item.startsWith('video-id')) {
        const itemsFromLocalStorage = localStorage.getItem(item)
        video.push(JSON.parse(itemsFromLocalStorage))
      }  
    }
    setVideoList(video)
  } 

  const removeItemFromLocalStorage = id => {
    localStorage.removeItem(`video-id: ${id}`)
  }

  const deleteVideo = id => {
    removeItemFromLocalStorage(id)
    reRenderVideoList()
  }

  const reRenderVideoList = () => {
    getItemsFromLocalStorage()
  }
  
  const getAndRenderMyVideos = async () => {

    let video = {
      source: '',
      title: '',
      image: '',
      releaseDate: '',
      likes: '',
      views: '',
      id: ''
    }

    switch(videoSource) {
      case 'YouTube':
        await getYouTubeVideoInfo(inputValue).then(resp => {
          const { items } = resp.data;
          const videoData = items[0];
          const { title, publishedAt, thumbnails } = videoData.snippet
          const { likeCount, viewCount } = videoData.statistics
          const id = videoData.id
          video = { ...video, source: videoSource.toLowerCase(), title: title, image: thumbnails.medium.url, releaseDate: publishedAt, likes: likeCount, views: viewCount, id: id }
          setVideoList([...videosList, video]);
        });
        break;
      case 'Vimeo':
        await getVimeoVideoInfo(inputValue).then(async resp => {
          const { title, upload_date, thumbnail_url, video_id } = resp.data;
          video = { ...video, source: videoSource.toLowerCase(), title: title, image: thumbnail_url, releaseDate: upload_date.split(' ')[0], id: video_id }
          await getVimeoDetailedInfo(video_id).then(async resp => {
            const likes = resp.data.data[0].metadata.connections.likes.total
            video = { ...video, likes: likes }
            setVideoList([...videosList, video]);
          })  
        })
        break;
        default :
    }   

    addVideoToLocalStorage(video.id, video)
    reRenderVideoList()
  }



  useEffect(reRenderVideoList, [])

  return (
    <Container>
      <section className="search__bar">
        <SearchView 
        onChange={onInputChange} 
        onSubmit={onButtonSubmit} 
        onClick={chooseVideoSource} 
        source={videoSource} 
        />
      </section>
      <section className="featured-videos">
       <FeaturedVideos />
      </section>
      <section className="user-videos">
      <VideosList videoList={videosList} videoSource={videoSource} onClick={deleteVideo} setModal={setModal} setVideoId={setVideoId} setSource={setSource} />
      </section>
      <VideoModal modal={modal} setModal={setModal} videoId={videoId} source={source} />
     </Container>
  );
}

export default MainView;