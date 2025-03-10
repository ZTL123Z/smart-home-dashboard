import React from 'react';
import './RoomTabs.css';

const RoomTabs = () => {
  return (
    <div className="room-tabs">
      <div className="status-info">
        <div className="room-status active">
          <span className="status-dot"></span>
          <span>Living Room</span>
          <div className="status-indicators">
            <div className="water-indicator">
              <span className="water-icon">💧</span>
              <span className="water-percentage">72%</span>
            </div>
            <div className="battery-indicator">
              <span className="battery-percentage">32%</span>
            </div>
          </div>
        </div>
        <div className="activity-status">
          <span>Active for 3 hours</span>
        </div>
        <div className="time-controls">
          <button className="time-button active">
            <span className="clock-icon">🕒</span>
            <span>Today, 2023</span>
          </button>
          <button className="time-button">
            <span className="calendar-icon">📅</span>
          </button>
        </div>
      </div>
      
      <div className="tabs-container">
        <button className="room-tab active">Living Room</button>
        <button className="room-tab">Kitchen Room</button>
        <button className="room-tab">Bed Room</button>
        <button className="room-tab">Movie Room</button>
        <button className="room-tab">Game Room</button>
        <button className="add-room-tab">+</button>
      </div>
    </div>
  );
};

export default RoomTabs;