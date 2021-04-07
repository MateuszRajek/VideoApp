import React, { useState } from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import { getYouTubeVideoInfo, getVimeoVideoInfo, getVimeoDetailedInfo } from '../../requests.js';
import VideosList from '../VideosList/VideosList';
import './MainView.css';

function MainView() {
  const [inputValue, setInputValue] = useState('');
  const [videosList, setVideoList] = useState([]);
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
  
  const getAndRenderMyVideos = async () => {

    let video = {
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
          console.log(resp)
          video = { ...video, title: title, image: thumbnails.medium.url, releaseDate: publishedAt, likes: likeCount, views: viewCount, id: id }
          setVideoList([...videosList, video]);
        });
        break;
      case 'Vimeo':
        await getVimeoVideoInfo(inputValue).then(resp => {
          const { title, upload_date, thumbnail_url, video_id } = resp.data;
          video = { ...video, title: title, image: thumbnail_url, releaseDate: upload_date.split(' ')[0], id: video_id}
          getVimeoDetailedInfo(video_id).then(resp => {
            const likes = resp.data.data[0].metadata.connections.likes.total
            video = { ...video, likes: likes }
            setVideoList([...videosList, video]);
          })  
        })
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
      <VideosList videoList={videosList} videoSource={videoSource} />
      </section>
     </Container>
  );
}

export default MainView;