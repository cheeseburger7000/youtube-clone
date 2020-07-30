import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <Sidebar />
      <RecommendedVideos />
    </div>
  );
}

export default App;
