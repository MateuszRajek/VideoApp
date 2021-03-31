import React from 'react';
import SearchView from '../SearchView/SearchView';
import VideosList from '../VideosList/VideosList';
import './MainView.css';

function MainView() {
  return (
    <div className="main__container">
    <SearchView />
    <VideosList />    
    </div>
  );
}

export default MainView;