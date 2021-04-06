import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import { getYouTubeVideoInfo, getVimeoVideoInfo } from '../../requests.js';
import VideosList from '../VideosList/VideosList';
import './MainView.css';

function MainView() {
  const [inputValue, setInputValue] = useState('');
  const [myVideosList, setVideoList] = useState([]);
  const [videoSource, setVideoSource] = useState('Choose video source');
  
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

  console.log(videoSource)
  
  const getAndRenderMyVideos = async () => {

    switch(videoSource) {
      case 'YouTube':
        await getYouTubeVideoInfo(inputValue).then(resp => {
          const { items } = resp.data;
          const video = items[0];
          setVideoList([...myVideosList, video]);
          console.log('youtube', video)
        });
        break;
      case 'Vimeo':
        // const videoId = videoSource.split('/').slice(-1)[0].split('?')[0]
        // console.log(videoId)
        await getVimeoVideoInfo(inputValue).then(resp => {
        // //   // const { items } = resp.data;
        // //   // setVideoList([...myVideosList, video]);
          console.log('vimeo', resp)
        });
        break;
        default :
    }   
  }

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
      <VideosList videoList={myVideosList} />
      </section>
     </Container>
  
  );
}

export default MainView;