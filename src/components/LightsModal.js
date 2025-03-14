import React, { useState } from 'react';
import './LightsModal.css';
import { FaLightbulb, FaTimes, FaPowerOff, FaRegLightbulb, FaCog, FaToggleOn } from 'react-icons/fa';

const LightsModal = ({ isOpen, onClose }) => {
  // 模拟灯光数据
  const [lights, setLights] = useState([
    { id: 1, name: 'Living Room Main', isOn: true, brightness: 80, room: 'Living Room' },
    { id: 2, name: 'Living Room Corner', isOn: true, brightness: 60, room: 'Living Room' },
    { id: 3, name: 'Kitchen Ceiling', isOn: true, brightness: 100, room: 'Kitchen' },
    { id: 4, name: 'Kitchen Counter', isOn: true, brightness: 70, room: 'Kitchen' },
    { id: 5, name: 'Bedroom Main', isOn: true, brightness: 50, room: 'Bedroom' },
    { id: 6, name: 'Bedroom Reading', isOn: true, brightness: 90, room: 'Bedroom' },
    { id: 7, name: 'Bathroom', isOn: true, brightness: 100, room: 'Bathroom' },
    { id: 8, name: 'Hallway', isOn: true, brightness: 70, room: 'Hallway' },
    { id: 9, name: 'Dining Room', isOn: false, brightness: 0, room: 'Dining Room' },
    { id: 10, name: 'Office Desk', isOn: false, brightness: 0, room: 'Office' },
    { id: 11, name: 'Office Ceiling', isOn: false, brightness: 0, room: 'Office' },
    { id: 12, name: 'Guest Room', isOn: false, brightness: 0, room: 'Guest Room' }
  ]);

  // 如果模态框未打开，则不渲染任何内容
  if (!isOpen) return null;

  // 过滤出活跃的灯光
  const activeLights = lights.filter(light => light.isOn);
  
  // 按房间分组
  const roomGroups = {};
  lights.forEach(light => {
    if (!roomGroups[light.room]) {
      roomGroups[light.room] = [];
    }
    roomGroups[light.room].push(light);
  });

  // 切换灯光状态
  const toggleLight = (id) => {
    setLights(lights.map(light => 
      light.id === id ? { ...light, isOn: !light.isOn, brightness: !light.isOn ? 70 : 0 } : light
    ));
  };

  // 调整亮度
  const adjustBrightness = (id, value) => {
    setLights(lights.map(light => 
      light.id === id ? { ...light, brightness: value, isOn: value > 0 } : light
    ));
  };

  // 关闭所有灯光
  const turnOffAllLights = () => {
    setLights(lights.map(light => ({ ...light, isOn: false, brightness: 0 })));
  };

  // 开启所有灯光
  const turnOnAllLights = () => {
    setLights(lights.map(light => ({ ...light, isOn: true, brightness: 70 })));
  };

  return (
    <div className="lights-modal-overlay" onClick={onClose}>
      <div className="lights-modal" onClick={e => e.stopPropagation()}>
        <div className="lights-modal-header">
          <div className="lights-modal-title">
            <FaLightbulb className="lights-icon" />
            <h2>Active Lights</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="lights-modal-content">
          <div className="lights-summary">
            <div className="lights-total">
              <h3>Active Lights</h3>
              <div className="lights-value">{activeLights.length} of {lights.length}</div>
            </div>
            
            <div className="lights-actions">
              <button className="action-button turn-on" onClick={turnOnAllLights}>
                <FaToggleOn /> Turn On All
              </button>
              <button className="action-button" onClick={turnOffAllLights}>
                <FaPowerOff /> Turn Off All
              </button>
            </div>
          </div>
          
          <div className="lights-by-room">
            {Object.keys(roomGroups).map(room => (
              <div className="room-section" key={room}>
                <h3>{room}</h3>
                <div className="room-lights-list">
                  {roomGroups[room].map(light => (
                    <div className={`light-item ${light.isOn ? 'active' : ''}`} key={light.id}>
                      <div className="light-info">
                        <div className="light-icon">
                          {light.isOn ? <FaLightbulb /> : <FaRegLightbulb />}
                        </div>
                        <div className="light-name">{light.name}</div>
                      </div>
                      <div className="light-controls">
                        <div className="brightness-slider">
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={light.brightness} 
                            onChange={(e) => adjustBrightness(light.id, parseInt(e.target.value))}
                            className="slider light-slider"
                          />
                          <span className="brightness-value">{light.brightness}%</span>
                        </div>
                        <div 
                          className={`switch-control ${light.isOn ? 'on' : 'off'}`}
                          onClick={() => toggleLight(light.id)}
                        >
                          <div className="switch-label">{light.isOn ? 'ON' : 'OFF'}</div>
                          <div className="switch-toggle">
                            <div className="switch-handle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="lights-tips">
            <h3>Quick Tips</h3>
            <ul className="tips-list">
              <li>Adjust brightness to save energy</li>
              <li>Group lights by room for easier control</li>
              <li>Set up schedules for automatic control</li>
            </ul>
          </div>
        </div>
        
        <div className="lights-modal-footer">
          <button className="settings-button">
            <FaCog /> Advanced Settings
          </button>
          <button className="close-button-text" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LightsModal; 