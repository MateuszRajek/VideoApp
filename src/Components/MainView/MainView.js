import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import { getVideoInfo } from '../../requests.js';
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
    await getVideoInfo(inputValue).then(resp => {
      const { items } = resp.data
      const video = items[0]
      setVideoList([...myVideosList, video])
    })
  }

  return (
    <Container>
      <section className="search__bar">
        <SearchView onChange={onInputChange} onClick={onButtonSubmit}/>
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