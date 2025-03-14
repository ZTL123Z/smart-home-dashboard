import React, { useState } from 'react';
import './RoomTabs.css';

const RoomTabs = () => {
  // 状态管理
  const [activeRoom, setActiveRoom] = useState('living');
  const [activeView, setActiveView] = useState('grid');
  const [showCalendar, setShowCalendar] = useState(false);
  
  // 房间数据
  const rooms = [
    { id: 'living', name: 'Living Room', humidity: 72, temperature: 32, active: true },
    { id: 'kitchen', name: 'Kitchen Room', humidity: 65, temperature: 28, active: false },
    { id: 'bed', name: 'Bed Room', humidity: 60, temperature: 25, active: false },
    { id: 'movie', name: 'Movie Room', humidity: 55, temperature: 23, active: false },
    { id: 'game', name: 'Game Room', humidity: 50, temperature: 22, active: false }
  ];
  
  // 处理房间切换
  const handleRoomChange = (roomId) => {
    setActiveRoom(roomId);
  };
  
  // 处理视图模式切换
  const handleViewChange = (view) => {
    setActiveView(view);
  };
  
  // 处理日历显示切换
  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };
  
  // 处理添加房间
  const handleAddRoom = () => {
    alert('Add new room functionality would open here');
  };

  return (
    <div className="room-tabs">
      <div className="tabs-container">
        {rooms.map(room => (
          <button 
            key={room.id}
            className={`room-tab ${activeRoom === room.id ? 'active' : ''}`}
            onClick={() => handleRoomChange(room.id)}
          >
            {activeRoom === room.id && <span className="status-dot"></span>}
            <span>{room.name}</span>
            {activeRoom === room.id && (
              <div className="status-indicators">
                <div className="humidity-indicator">
                  <span className="humidity-icon"></span>
                  <span className="humidity-percentage">{room.humidity}%</span>
                </div>
                <div className="temperature-indicator">
                  <span className="temperature-icon"></span>
                  <span className="temperature-percentage">{room.temperature}%</span>
                </div>
              </div>
            )}
          </button>
        ))}
        <button className="add-room-tab" onClick={handleAddRoom}>+</button>
      </div>

      <div className="status-info">
        <div className="left-controls">
          <div className="activity-status">
            <span>Active for 3 hours</span>
          </div>
          <div className="time-controls">
            <button 
              className={`time-button ${!showCalendar ? 'active' : ''}`}
              onClick={() => setShowCalendar(false)}
            >
              <span className="clock-icon"></span>
              <span>Today, 2023</span>
            </button>
            <button 
              className={`time-button ${showCalendar ? 'active' : ''}`}
              onClick={handleCalendarToggle}
            >
              <span className="calendar-icon"></span>
            </button>
          </div>
        </div>
        <div className="right-controls">
          <button className="slider-button" onClick={() => alert('Slider view options')}>
            <span className="slider-icon"></span>
          </button>
          <div className="view-controls">
            <button 
              className={`view-button ${activeView === 'grid' ? 'active' : ''}`}
              onClick={() => handleViewChange('grid')}
            >
              <span className="grid-icon"></span>
            </button>
            <button 
              className={`view-button ${activeView === 'table' ? 'active' : ''}`}
              onClick={() => handleViewChange('table')}
            >
              <span className="table-icon"></span>
            </button>
            <button 
              className={`view-button ${activeView === 'card' ? 'active' : ''}`}
              onClick={() => handleViewChange('card')}
            >
              <span className="card-icon"></span>
            </button>
          </div>
        </div>
      </div>
      
      {showCalendar && (
        <div className="calendar-popup">
          <div className="calendar-header">
            <h3>Calendar</h3>
            <button className="close-button" onClick={() => setShowCalendar(false)}>✖</button>
          </div>
          <div className="calendar-content">
            <p>Calendar functionality would be displayed here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomTabs;