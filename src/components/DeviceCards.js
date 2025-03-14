import React, { useState } from 'react';
import './DeviceCards.css';

const DeviceCards = () => {
  // 状态管理
  const [bluetoothActive, setBluetoothActive] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(20);
  const [uploadPaused, setUploadPaused] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState(50);
  const [intensity, setIntensity] = useState(70);
  const [lightMode, setLightMode] = useState('brightest');
  const [thermostatOn, setThermostatOn] = useState(true);
  const [temperature, setTemperature] = useState(24.3);
  const [thermostatMode, setThermostatMode] = useState('auto');
  const [batteryLevel, setBatteryLevel] = useState(31);
  const [devices, setDevices] = useState([
    { id: 1, name: "Kalen's mobile", ip: "102.432.457.113", icon: "📱" },
    { id: 2, name: "Tablet2", ip: "122.353.364.111", icon: "💻" }
  ]);

  // 处理蓝牙开关切换
  const handleBluetoothToggle = () => {
    setBluetoothActive(!bluetoothActive);
  };

  // 处理上传进度
  const handleUploadProgress = () => {
    if (!uploadPaused && uploadProgress < 100) {
      setTimeout(() => {
        setUploadProgress(prev => Math.min(prev + 5, 100));
      }, 1000);
    }
  };

  // 处理暂停上传
  const handlePauseUpload = () => {
    setUploadPaused(!uploadPaused);
  };

  // 处理取消上传
  const handleCancelUpload = () => {
    setUploadProgress(0);
  };

  // 处理设备删除
  const handleRemoveDevice = (id) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  // 处理灯光开关
  const handleLightToggle = () => {
    setLightOn(!lightOn);
  };

  // 处理亮度调整
  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  // 处理灯光模式切换
  const handleLightModeChange = (mode) => {
    setLightMode(mode);
  };

  // 处理恒温器开关
  const handleThermostatToggle = () => {
    setThermostatOn(!thermostatOn);
  };

  // 处理温度调整
  const handleTemperatureChange = (value) => {
    setTemperature(parseFloat(value.toFixed(1)));
  };

  // 处理恒温器模式切换
  const handleThermostatModeChange = (mode) => {
    setThermostatMode(mode);
  };

  // 模拟上传进度
  React.useEffect(() => {
    if (!uploadPaused && uploadProgress < 100) {
      const timer = setTimeout(() => {
        setUploadProgress(prev => Math.min(prev + 5, 100));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [uploadProgress, uploadPaused]);

  return (
    <div className="device-cards">
      <div className="device-row">
        <div className="bluetooth-card">
          <div className="card-header">
            <h3>Bluetooth</h3>
            <span className="bluetooth-icon">🔵</span>
          </div>
          <div className="device-item">
            <div className="device-info">
              <span className="check-icon">✓</span>
              <span>Martine's</span>
            </div>
            <div 
              className={`toggle-switch ${bluetoothActive ? 'active' : ''}`}
              onClick={handleBluetoothToggle}
            >
              <div className="toggle-button"></div>
            </div>
          </div>
        </div>
        
        <div className="add-device-card">
          <div className="add-device-content" onClick={() => alert("Add device functionality would open here")}>
            <span className="plus-icon">+</span>
            <p>Add device by Bluetooth</p>
          </div>
        </div>
        
        <div className="upload-device-card">
          <div className="upload-header">
            <span className="cloud-icon">☁️</span>
            <span>Uploads device</span>
          </div>
          <div className="upload-progress">
            <div className="progress-text">
              <span>{uploadPaused ? "Paused..." : "Uploading..."}</span>
              <span className="time-left">{uploadProgress}% / {Math.round((100 - uploadProgress) / 5)} seconds left</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
            </div>
            <div className="progress-controls">
              <button className="pause-button" onClick={handlePauseUpload}>
                {uploadPaused ? "▶️" : "⏸"}
              </button>
              <button className="cancel-button" onClick={handleCancelUpload}>✖</button>
              <button className="more-button" onClick={() => alert("More options")}>⋮</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="device-row">
        <div className="user-devices-card">
          <div className="user-header">
            <div className="user-avatar">
              <img src="/avatars/image2.png" alt="Kalen" />
            </div>
            <div className="user-info">
              <h3>Kalen</h3>
              <span>{devices.length} Devices</span>
            </div>
            <div className="time-setting">
              <span className="clock-icon">🕒</span>
              <span className="time">6:12</span>
              <button className="close-button" onClick={() => alert("Close time settings")}>✖</button>
            </div>
          </div>
          
          <div className="device-list">
            {devices.map(device => (
              <div className="device-item" key={device.id}>
                <div className="device-icon">{device.icon}</div>
                <div className="device-details">
                  <span>{device.name}</span>
                  <span className="ip-address">IP Address: {device.ip}</span>
                </div>
                <button className="remove-button" onClick={() => handleRemoveDevice(device.id)}>🗑️</button>
              </div>
            ))}
            
            <div className="profile-link" onClick={() => alert("View other profile")}>
              <span className="link-icon">🔗</span>
              <span>Other profile</span>
              <span className="hand-icon">👆</span>
            </div>
          </div>
        </div>
        
        <div className="smart-light-card">
          <div className="card-header">
            <h3>Smart Light</h3>
            <span className="arrow-icon">▶</span>
          </div>
          <div className="light-controls">
            <div className="light-status">
              <span>{lightOn ? "On" : "Off"}</span>
              <div 
                className={`toggle-switch ${lightOn ? 'active' : ''}`}
                onClick={handleLightToggle}
              >
                <div className="toggle-button"></div>
              </div>
              <button className="brightness-button" onClick={() => alert("Adjust brightness")}>☀️</button>
            </div>
            <div className="brightness-control">
              <div className="brightness-value">
                <span className="percentage">{brightness}%</span>
              </div>
              <div className="brightness-slider">
                <span>Brightness</span>
                <div className="slider-track" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = Math.round((x / rect.width) * 100);
                  handleBrightnessChange(Math.max(0, Math.min(100, percentage)));
                }}>
                  <div className="slider-thumb" style={{ left: `${brightness}%` }}></div>
                </div>
              </div>
            </div>
            <div className="schedule-control">
              <div className="schedule-header">
                <span>Schedule</span>
                <button className="schedule-button active" onClick={() => alert("Schedule settings")}>📅</button>
              </div>
              <div className="time-slots">
                <div className="time-slot" onClick={() => alert("Set start time")}>
                  <span className="time-label">From</span>
                  <span className="time-value">12:00</span>
                  <span className="dropdown-icon">▼</span>
                </div>
                <div className="time-slot" onClick={() => alert("Set end time")}>
                  <span className="time-label">To</span>
                  <span className="time-value">12:00 PM</span>
                  <span className="dropdown-icon">▼</span>
                </div>
              </div>
              <div className="intensity-control">
                <span>Intensity</span>
                <div className="intensity-slider">
                  <div className="slider-track" onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = Math.round((x / rect.width) * 100);
                    setIntensity(Math.max(0, Math.min(100, percentage)));
                  }}>
                    <div className="slider-fill" style={{ width: `${intensity}%` }}></div>
                  </div>
                  <span className="intensity-value">{intensity}%</span>
                </div>
              </div>
              <div className="mode-buttons">
                <button 
                  className={`mode-button ${lightMode === 'brightest' ? 'active' : ''}`}
                  onClick={() => handleLightModeChange('brightest')}
                >
                  <span className="mode-icon">☀️</span>
                  <span>Brightest</span>
                </button>
                <button 
                  className={`mode-button ${lightMode === 'day' ? 'active' : ''}`}
                  onClick={() => handleLightModeChange('day')}
                >
                  <span className="mode-icon">🌤️</span>
                  <span>Day</span>
                </button>
                <button 
                  className={`mode-button ${lightMode === 'night' ? 'active' : ''}`}
                  onClick={() => handleLightModeChange('night')}
                >
                  <span className="mode-icon">🌙</span>
                  <span>Night</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="thermostat-card">
          <div className="thermostat-header">
            <div className="thermostat-icon">❄️</div>
            <div className="thermostat-info">
              <h3>Thermostat</h3>
              <span>Auto Cooling</span>
            </div>
            <div className="thermostat-controls">
              <span>{thermostatOn ? "On" : "Off"}</span>
              <div 
                className={`toggle-switch ${thermostatOn ? 'active' : ''}`}
                onClick={handleThermostatToggle}
              >
                <div className="toggle-button"></div>
              </div>
            </div>
          </div>
          
          <div className="temperature-display">
            <div className="current-temp">
              <span className="temp-value">{temperature}</span>
              <span className="temp-unit">°</span>
            </div>
            <div className="temp-dial" onClick={() => {
              // 模拟温度调整
              const newTemp = temperature + (Math.random() > 0.5 ? 0.1 : -0.1);
              handleTemperatureChange(newTemp);
            }}>
              <div className="dial-circle">
                <span className="co2-text">CO₂</span>
              </div>
              <div className="dial-markers">
                <div className="marker min">16°</div>
                <div className="marker max">30°</div>
              </div>
            </div>
          </div>
          
          <div className="mode-controls">
            <button 
              className={`mode-button ${thermostatMode === 'swing' ? 'active' : ''}`}
              onClick={() => handleThermostatModeChange('swing')}
            >
              <span className="mode-icon">🔄</span>
              <span>Swing</span>
              <span className="mode-status">{thermostatMode === 'swing' ? 'on' : 'off'}</span>
            </button>
            <button 
              className={`mode-button ${thermostatMode === 'auto' ? 'active' : ''}`}
              onClick={() => handleThermostatModeChange('auto')}
            >
              <span className="mode-icon">🔄</span>
              <span>Auto</span>
              <span className="mode-status">{thermostatMode === 'auto' ? 'on' : 'off'}</span>
            </button>
            <button 
              className={`mode-button ${thermostatMode === 'timer' ? 'active' : ''}`}
              onClick={() => handleThermostatModeChange('timer')}
            >
              <span className="mode-icon">⏱️</span>
              <span>Timer</span>
              <span className="mode-status">{thermostatMode === 'timer' ? 'on' : 'off'}</span>
            </button>
          </div>
          
          <div className="power-usage">
            <div className="usage-header">
              <span>600 W</span>
              <span className="arrow-icon">▶</span>
            </div>
            <div className="usage-info">
              <div className="active-since">
                <span className="lightning-icon">⚡</span>
                <span>Active since 2 hour ago</span>
              </div>
              <div className="comments" onClick={() => alert("View comments")}>
                <span className="comment-icon">💬</span>
                <span>3 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="device-row">
        <div className="qr-code-card">
          <div className="qr-code-image">
            <div className="qr-placeholder">QR Code</div>
          </div>
          <div className="qr-info">
            <p>Scan QR Code to control your devices and access controls</p>
          </div>
          <button className="scan-button" onClick={() => alert("Scan QR code")}>
            <span className="scan-icon">📷</span>
            <span>Scan QR Code</span>
          </button>
        </div>
        
        <div className="battery-card">
          <div className="battery-header">
            <h3>Battery</h3>
            <button className="more-button" onClick={() => alert("Battery options")}>⋯</button>
          </div>
          <div className="battery-content" onClick={() => {
            // 模拟电池电量变化
            const newLevel = Math.max(5, Math.min(100, batteryLevel + (Math.random() > 0.5 ? 5 : -5)));
            setBatteryLevel(newLevel);
          }}>
            <div className="battery-percentage">{batteryLevel}%</div>
            <div className="battery-icon">
              <div className="battery-level" style={{ height: `${batteryLevel}%` }}></div>
            </div>
          </div>
          <div className="battery-info">
            <span>{Math.round(batteryLevel / 5)} Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCards;