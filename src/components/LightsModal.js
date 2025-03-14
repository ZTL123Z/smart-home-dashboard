import React, { useState, useEffect, useRef } from 'react';
import './LightsModal.css';
import { FaLightbulb, FaTimes, FaPowerOff, FaRegLightbulb, FaCog, FaToggleOn, FaRandom } from 'react-icons/fa';

const LightsModal = ({ 
  isOpen, 
  onClose, 
  lights, 
  setLights, 
  toggleLight: parentToggleLight, 
  adjustBrightness: parentAdjustBrightness, 
  turnOffAllLights: parentTurnOffAllLights, 
  turnOnAllLights: parentTurnOnAllLights 
}) => {
  // 添加演示模式状态
  const [demoMode, setDemoMode] = useState(false);
  // 添加数字变化动画状态
  const [isChanging, setIsChanging] = useState(false);
  // 记录上一次的活跃灯光数量
  const prevActiveLightsRef = useRef(0);
  
  // 监测活跃灯光数量变化
  useEffect(() => {
    if (isOpen && lights) {
      const activeLightsCount = lights.filter(light => light.isOn).length;
      if (prevActiveLightsRef.current !== activeLightsCount && prevActiveLightsRef.current !== 0) {
        setIsChanging(true);
        const timer = setTimeout(() => {
          setIsChanging(false);
        }, 500);
        return () => clearTimeout(timer);
      }
      prevActiveLightsRef.current = activeLightsCount;
    }
  }, [lights, isOpen]);

  // 演示模式效果
  useEffect(() => {
    let interval;
    if (demoMode && isOpen && setLights) {
      interval = setInterval(() => {
        setLights(prevLights => {
          // 随机选择一个灯光来切换状态
          const randomIndex = Math.floor(Math.random() * prevLights.length);
          return prevLights.map((light, index) => {
            if (index === randomIndex) {
              // 切换选中灯光的状态
              return { 
                ...light, 
                isOn: !light.isOn, 
                brightness: !light.isOn ? Math.floor(Math.random() * 50) + 50 : 0 
              };
            }
            return light;
          });
        });
      }, 2000); // 每2秒切换一次
    }
    return () => clearInterval(interval);
  }, [demoMode, isOpen, setLights]);

  // 如果模态框未打开，则不渲染任何内容
  if (!isOpen || !lights) return null;

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
  const toggleLightHandler = (id) => {
    if (parentToggleLight) {
      parentToggleLight(id);
    }
  };

  // 调整亮度
  const adjustBrightnessHandler = (id, value) => {
    if (parentAdjustBrightness) {
      parentAdjustBrightness(id, value);
    }
  };

  // 关闭所有灯光
  const turnOffAllLightsHandler = () => {
    if (parentTurnOffAllLights) {
      parentTurnOffAllLights();
    }
  };

  // 开启所有灯光
  const turnOnAllLightsHandler = () => {
    if (parentTurnOnAllLights) {
      parentTurnOnAllLights();
    }
  };

  // 切换演示模式
  const toggleDemoMode = () => {
    setDemoMode(!demoMode);
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
              <div className="lights-value">
                <span className={isChanging ? 'changing' : ''}>{activeLights.length}</span> of <span>{lights.length}</span>
              </div>
            </div>
            
            <div className="lights-actions">
              <button className="action-button turn-on" onClick={turnOnAllLightsHandler}>
                <FaToggleOn /> Turn On All
              </button>
              <button className="action-button" onClick={turnOffAllLightsHandler}>
                <FaPowerOff /> Turn Off All
              </button>
              <button 
                className={`action-button ${demoMode ? 'demo-active' : 'demo'}`} 
                onClick={toggleDemoMode}
              >
                <FaRandom /> {demoMode ? 'Stop Demo' : 'Start Demo'}
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
                            onChange={(e) => adjustBrightnessHandler(light.id, parseInt(e.target.value))}
                            className="slider light-slider"
                          />
                          <span className="brightness-value">{light.brightness}%</span>
                        </div>
                        <div 
                          className={`switch-control ${light.isOn ? 'on' : 'off'}`}
                          onClick={() => toggleLightHandler(light.id)}
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