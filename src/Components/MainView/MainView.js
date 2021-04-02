import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import { fetchYoutubeRequest } from '../../requests.js';
import VideosList from '../VideosList/VideosList';
import './MainView.css';

function MainView() {
  const [inputValue, setInputValue] = useState('')
  const [myVideosList, setVideoList] = useState([])
  
  const onButtonSubmit = () => {
    getAndRenderMyVideos()
  }
  
  const onInputChange = event => {
  setInputValue(event.target.value)
  }
  
  const getAndRenderMyVideos = async () => {
    await fetchYoutubeRequest(inputValue).then(resp => {
      const videoId = resp.data.items[0].id.videoId
      setVideoList([...myVideosList, videoId])
    })
  }

  return (
    <Container>
      <section className="search__bar">
        <SearchView onChange={onInputChange} onClick={onButtonSubmit}/>
      </section>
      <section className="featured-videos">
       <FeaturedVideos src="https://via.placeholder.com/150x200"/>
      </section>
      <section className="user-videos">
      <VideosList videoList={myVideosList} />
      </section>
     </Container>
  
  );
}

export default MainView;