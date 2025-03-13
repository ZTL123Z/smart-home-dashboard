import React from 'react';
import './MainContent.css';
import RoomTabs from './RoomTabs';
import DeviceCards from './DeviceCards';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <div className="edit-section">
          <span className="edit-text">EDIT</span>
          <span className="update-time">updated 4 min ago</span>
        </div>
        <div className="search-section">
          <div className="tablet-name">
            <span className="tablet-icon">🔊</span>
            <span>Tablet_</span>
          </div>
          <div className="search-box">
            <span className="search-icon">🔍</span>
          </div>
          <div className="voice-button">
            <span className="mic-icon">🎤</span>
          </div>
        </div>
        <div className="controls-section">
          <div className="notification">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">1</span>
          </div>
          <div className="sync-button">
            <span className="sync-icon">🔄</span>
          </div>
          <div className="power-toggle active">
            <div className="toggle-button"></div>
          </div>
        </div>
      </div>
      
      <RoomTabs />
      
      <div className="view-controls">
        <button className="view-button">
          <span className="list-icon">≡</span>
        </button>
        <button className="view-button active">
          <span className="grid-icon">⊞</span>
        </button>
        <button className="view-button">
          <span className="table-icon">▤</span>
        </button>
        <button className="view-button">
          <span className="map-icon">🗺️</span>
        </button>
      </div>
      
      <DeviceCards />
    </div>
  );
};

export default MainContent;