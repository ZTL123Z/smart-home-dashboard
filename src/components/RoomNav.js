import React, { useState } from 'react';
import GooeyNav from './GooeyNav';
import { FaHome, FaUtensils, FaBed, FaFilm, FaGamepad } from 'react-icons/fa';
import './RoomNav.css';

const RoomNav = ({ onRoomChange }) => {
  const [activeRoom, setActiveRoom] = useState(0);
  
  const rooms = [
    { 
      text: 'Living Room', 
      icon: <FaHome />, 
      badge: '72%',
      badgeColor: '#4285f4'
    },
    { 
      text: 'Kitchen Room', 
      icon: <FaUtensils />, 
      badge: '32%',
      badgeColor: '#ff9800'
    },
    { 
      text: 'Bed Room', 
      icon: <FaBed /> 
    },
    { 
      text: 'Movie Room', 
      icon: <FaFilm /> 
    },
    { 
      text: 'Game Room', 
      icon: <FaGamepad /> 
    }
  ];
  
  const handleRoomChange = (index) => {
    setActiveRoom(index);
    if (onRoomChange) {
      onRoomChange(index);
    }
  };
  
  return (
    <div className="room-nav-wrapper">
      <GooeyNav 
        items={rooms} 
        activeIndex={activeRoom} 
        onChange={handleRoomChange} 
        backgroundColor="#f5f8fa"
        activeColor="#4caf50"
      />
    </div>
  );
};

export default RoomNav; 