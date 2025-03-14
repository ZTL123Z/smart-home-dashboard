import React from 'react';
import './DeviceCards.css';

const DeviceCards = () => {
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
            <div className="toggle-switch active">
              <div className="toggle-button"></div>
            </div>
          </div>
        </div>
        
        <div className="add-device-card">
          <div className="add-device-content">
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
              <span>Uploading...</span>
              <span className="time-left">20% / 10 seconds left</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '20%' }}></div>
            </div>
            <div className="progress-controls">
              <button className="pause-button">⏸</button>
              <button className="cancel-button">✖</button>
              <button className="more-button">⋮</button>
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
              <span>2 Devices</span>
            </div>
            <div className="time-setting">
              <span className="clock-icon">🕒</span>
              <span className="time">6:12</span>
              <button className="close-button">✖</button>
            </div>
          </div>
          
          <div className="device-list">
            <div className="device-item">
              <div className="device-icon">📱</div>
              <div className="device-details">
                <span>Kalen's mobile</span>
                <span className="ip-address">IP Address: 102.432.457.113</span>
              </div>
              <button className="remove-button">🗑️</button>
            </div>
            
            <div className="device-item">
              <div className="device-icon">💻</div>
              <div className="device-details">
                <span>Tablet2</span>
                <span className="ip-address">IP Address: 122.353.364.111</span>
              </div>
              <button className="remove-button">🗑️</button>
            </div>
            
            <div className="profile-link">
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
              <span>On</span>
              <div className="toggle-switch active">
                <div className="toggle-button"></div>
              </div>
              <button className="brightness-button">☀️</button>
            </div>
            <div className="brightness-control">
              <div className="brightness-value">
                <span className="percentage">50%</span>
              </div>
              <div className="brightness-slider">
                <span>Brightness</span>
                <div className="slider-track">
                  <div className="slider-thumb" style={{ left: '50%' }}></div>
                </div>
              </div>
            </div>
            <div className="schedule-control">
              <div className="schedule-header">
                <span>Schedule</span>
                <button className="schedule-button active">📅</button>
              </div>
              <div className="time-slots">
                <div className="time-slot">
                  <span className="time-label">From</span>
                  <span className="time-value">12:00</span>
                  <span className="dropdown-icon">▼</span>
                </div>
                <div className="time-slot">
                  <span className="time-label">To</span>
                  <span className="time-value">12:00 PM</span>
                  <span className="dropdown-icon">▼</span>
                </div>
              </div>
              <div className="intensity-control">
                <span>Intensity</span>
                <div className="intensity-slider">
                  <div className="slider-track">
                    <div className="slider-fill" style={{ width: '70%' }}></div>
                  </div>
                  <span className="intensity-value">70%</span>
                </div>
              </div>
              <div className="mode-buttons">
                <button className="mode-button active">
                  <span className="mode-icon">☀️</span>
                  <span>Brightest</span>
                </button>
                <button className="mode-button">
                  <span className="mode-icon">🌤️</span>
                  <span>Day</span>
                </button>
                <button className="mode-button">
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
              <span>On</span>
              <div className="toggle-switch active">
                <div className="toggle-button"></div>
              </div>
            </div>
          </div>
          
          <div className="temperature-display">
            <div className="current-temp">
              <span className="temp-value">24.3</span>
              <span className="temp-unit">°</span>
            </div>
            <div className="temp-dial">
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
            <button className="mode-button">
              <span className="mode-icon">🔄</span>
              <span>Swing</span>
              <span className="mode-status">off</span>
            </button>
            <button className="mode-button active">
              <span className="mode-icon">🔄</span>
              <span>Auto</span>
              <span className="mode-status">On</span>
            </button>
            <button className="mode-button">
              <span className="mode-icon">⏱️</span>
              <span>Timer</span>
              <span className="mode-status">off</span>
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
              <div className="comments">
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
          <button className="scan-button">
            <span className="scan-icon">📷</span>
            <span>Scan QR Code</span>
          </button>
        </div>
        
        <div className="battery-card">
          <div className="battery-header">
            <h3>Battery</h3>
            <button className="more-button">⋯</button>
          </div>
          <div className="battery-content">
            <div className="battery-percentage">31%</div>
            <div className="battery-icon">
              <div className="battery-level" style={{ height: '31%' }}></div>
            </div>
          </div>
          <div className="battery-info">
            <span>20 Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCards;