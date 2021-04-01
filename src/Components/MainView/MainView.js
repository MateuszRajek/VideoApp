import React from 'react';
import { Container } from 'reactstrap';
import SearchView from '../SearchView/SearchView';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import './MainView.css';
import VideosList from '../VideosList/VideosList';

function MainView() {

  return (
    <Container>
      <section className="search__bar">
        <SearchView />
      </section>
      <section className="featured-videos">
       <FeaturedVideos src="https://via.placeholder.com/150x200"/>
      </section>
      <section className="user-videos">
      <VideosList src="https://via.placeholder.com/250x350" />
      </section>
     </Container>
  
  );
}

export default MainView;