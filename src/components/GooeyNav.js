import React, { useState, useRef, useEffect } from 'react';
import './GooeyNav.css';

const GooeyNav = ({ items, activeIndex = 0, onChange, backgroundColor = '#f5f8fa', activeColor = '#4285f4' }) => {
  const [active, setActive] = useState(activeIndex);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);

  // 更新指示器位置
  const updateIndicator = (index) => {
    if (!navRef.current || !indicatorRef.current || itemRefs.current.length === 0) return;
    
    const currentItem = itemRefs.current[index];
    if (!currentItem) return;
    
    const navRect = navRef.current.getBoundingClientRect();
    const itemRect = currentItem.getBoundingClientRect();
    
    // 计算相对位置
    const left = itemRect.left - navRect.left;
    const width = itemRect.width;
    
    // 设置指示器位置和宽度
    indicatorRef.current.style.left = `${left}px`;
    indicatorRef.current.style.width = `${width}px`;
  };

  // 处理选项点击
  const handleItemClick = (index) => {
    setActive(index);
    if (onChange) {
      onChange(index);
    }
  };

  // 初始化和更新指示器
  useEffect(() => {
    setActive(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    updateIndicator(active);
    
    // 添加窗口大小变化监听
    const handleResize = () => {
      updateIndicator(active);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  // 在组件挂载后更新指示器
  useEffect(() => {
    // 延迟一下，确保DOM已经渲染
    const timer = setTimeout(() => {
      updateIndicator(active);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gooey-nav-container" style={{ backgroundColor }}>
      {/* SVG滤镜 */}
      <svg className="gooey-filter">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      
      {/* 导航栏 */}
      <div className="gooey-nav" ref={navRef}>
        {/* 活动指示器 */}
        <div 
          className="gooey-indicator" 
          ref={indicatorRef}
          style={{ backgroundColor: activeColor }}
        ></div>
        
        {/* 导航项 */}
        {items.map((item, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className={`gooey-nav-item ${index === active ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item.icon && <span className="gooey-nav-icon">{item.icon}</span>}
            <span className="gooey-nav-text">{item.text}</span>
            {item.badge && (
              <span className="gooey-nav-badge" style={{ backgroundColor: item.badgeColor || '#ff5722' }}>
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GooeyNav; 