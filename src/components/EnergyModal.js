import React from 'react';
import './EnergyModal.css';
import { FaChartLine, FaTimes, FaLightbulb, FaRegClock, FaRegCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const EnergyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 模拟能源使用数据
  const hourlyData = [
    { hour: '00:00', usage: 0.05 },
    { hour: '02:00', usage: 0.03 },
    { hour: '04:00', usage: 0.02 },
    { hour: '06:00', usage: 0.04 },
    { hour: '08:00', usage: 0.08 },
    { hour: '10:00', usage: 0.07 },
    { hour: '12:00', usage: 0.06 },
    { hour: '14:00', usage: 0.07 },
    { hour: '16:00', usage: 0.09 },
    { hour: '18:00', usage: 0.12 },
    { hour: '20:00', usage: 0.15 },
    { hour: '22:00', usage: 0.10 }
  ];

  // 计算最大值以便正确显示图表
  const maxUsage = Math.max(...hourlyData.map(item => item.usage));
  
  // 设备能源使用数据
  const deviceData = [
    { name: 'Living Room Lights', usage: 0.3, percentage: 38 },
    { name: 'Kitchen Lights', usage: 0.2, percentage: 25 },
    { name: 'Bedroom Lights', usage: 0.15, percentage: 19 },
    { name: 'Bathroom Lights', usage: 0.1, percentage: 12 },
    { name: 'Other Lights', usage: 0.05, percentage: 6 }
  ];

  return (
    <div className="energy-modal-overlay" onClick={onClose}>
      <div className="energy-modal" onClick={e => e.stopPropagation()}>
        <div className="energy-modal-header">
          <div className="energy-modal-title">
            <FaChartLine className="energy-icon" />
            <h2>Energy Usage Details</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="energy-modal-content">
          <div className="energy-summary">
            <div className="energy-total">
              <h3>Today's Usage</h3>
              <div className="energy-value">0.8 kWh</div>
              <div className="energy-comparison">
                <span className="energy-trend down">
                  <FaChevronDown /> 10%
                </span>
                compared to yesterday
              </div>
            </div>
            
            <div className="energy-period-selector">
              <button className="period-button active">
                <FaRegClock /> Today
              </button>
              <button className="period-button">
                <FaRegCalendarAlt /> Week
              </button>
              <button className="period-button">
                <FaRegCalendarAlt /> Month
              </button>
            </div>
          </div>
          
          <div className="energy-chart-container">
            <h3>Hourly Usage</h3>
            <div className="energy-chart">
              {hourlyData.map((item, index) => (
                <div className="chart-bar-container" key={index}>
                  <div 
                    className="chart-bar" 
                    style={{ height: `${(item.usage / maxUsage) * 100}%` }}
                    data-value={`${item.usage} kWh`}
                  ></div>
                  <div className="chart-label">{item.hour}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="energy-devices">
            <h3>Usage by Device</h3>
            <div className="device-list">
              {deviceData.map((device, index) => (
                <div className="device-item" key={index}>
                  <div className="device-info">
                    <div className="device-icon">
                      <FaLightbulb />
                    </div>
                    <div className="device-name">{device.name}</div>
                  </div>
                  <div className="device-usage">
                    <div className="device-value">{device.usage} kWh</div>
                    <div className="device-progress">
                      <div 
                        className="device-progress-bar" 
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <div className="device-percentage">{device.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="energy-tips">
            <h3>Energy Saving Tips</h3>
            <ul className="tips-list">
              <li>Turn off lights when not in use</li>
              <li>Use the "Night" mode after 10 PM</li>
              <li>Adjust brightness based on natural light</li>
              <li>Consider upgrading to more efficient bulbs</li>
            </ul>
          </div>
        </div>
        
        <div className="energy-modal-footer">
          <button className="download-button">Download Report</button>
          <button className="close-button-text" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EnergyModal; 