import React from 'react';
import './RoomTabs.css';

const RoomTabs = () => {
  return (
    <div className="room-tabs">
      <div className="tabs-container">
        <button className="room-tab active">
          <span className="status-dot"></span>
          <span>Living Room</span>
          <div className="status-indicators">
            <div className="humidity-indicator">
              <span className="humidity-icon"></span>
              <span className="humidity-percentage">72%</span>
            </div>
            <div className="temperature-indicator">
              <span className="temperature-icon"></span>
              <span className="temperature-percentage">32%</span>
            </div>
          </div>
        </button>
        <button className="room-tab">Kitchen Room</button>
        <button className="room-tab">Bed Room</button>
        <button className="room-tab">Movie Room</button>
        <button className="room-tab">Game Room</button>
        <button className="add-room-tab">+</button>
      </div>

      <div className="status-info">
        <div className="left-controls">
          <div className="activity-status">
            <span>Active for 3 hours</span>
          </div>
          <div className="time-controls">
            <button className="time-button active">
              <span className="clock-icon"></span>
              <span>Today, 2023</span>
            </button>
            <button className="time-button">
              <span className="calendar-icon"></span>
            </button>
          </div>
        </div>
        <div className="right-controls">
          <button className="slider-button">
            <span className="slider-icon"></span>
          </button>
          <div className="view-controls">
            <button className="view-button active">
              <span className="grid-icon"></span>
            </button>
            <button className="view-button">
              <span className="table-icon"></span>
            </button>
            <button className="view-button">
              <span className="card-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTabs;