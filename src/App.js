import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <div className="app-title">Domotica</div>
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
      <div className="bottom-controls-container">
        <div className="bottom-controls-section">
          <div className="battery-indicator">
            <span>73%</span>
            <div className="battery-bar">
              <div className="battery-level" style={{ width: '73%' }}></div>
            </div>
          </div>
          <div className="power-control">
            <span className="power-icon">⏻</span>
            <div className="toggle-switch active">
              <div className="toggle-button"></div>
            </div>
          </div>
        </div>
        <div className="bottom-controls-section">
          <div className="automatic-mode">
            <div className="mode-text">
              <div>Automatic Mode</div>
              <div className="mode-description">Save efforts of turning on/off</div>
            </div>
            <div className="mode-slider">
              <span>Slow</span>
              <div className="slider-track">
                <div className="slider-thumb"></div>
              </div>
              <span>Regular</span>
              <span>Max</span>
            </div>
          </div>
          <div className="quick-actions">
            <button className="action-button active">
              <span className="action-icon">🔥</span>
            </button>
            <button className="action-button">
              <span className="action-icon">🍵</span>
            </button>
            <button className="action-button">
              <span className="action-icon">🚿</span>
            </button>
            <button className="action-button">
              <span className="action-icon">🍽️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
