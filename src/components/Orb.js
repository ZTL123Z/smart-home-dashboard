import React, { useEffect, useRef } from "react";
import "./Orb.css";

export default function Orb({
  color = "#ffc107", // 默认为黄色，适合灯泡
  size = "200px",
  intensity = 0.8,
  children
}) {
  const orbRef = useRef(null);
  
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    
    // 设置Orb的大小
    orb.style.width = size;
    orb.style.height = size;
    
    // 创建动画效果
    const animate = () => {
      const time = Date.now() * 0.001;
      // 根据亮度调整脉动幅度
      const pulseIntensity = 0.02 + (intensity * 0.03);
      const scale = 1 + Math.sin(time) * pulseIntensity;
      
      orb.style.transform = `scale(${scale})`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size, intensity]);
  
  // 计算颜色的RGB值，用于生成辉光效果
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 193, b: 7 }; // 默认黄色
  };
  
  const rgb = hexToRgb(color);
  
  // 确保亮度值在合理范围内
  const actualIntensity = Math.max(0.2, Math.min(1, intensity));
  
  // 生成辉光效果的样式
  const glowStyle = {
    boxShadow: `0 0 ${10 + actualIntensity * 20}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${actualIntensity * 0.6}),
                0 0 ${20 + actualIntensity * 30}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${actualIntensity * 0.4}),
                0 0 ${30 + actualIntensity * 40}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${actualIntensity * 0.2})`,
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${actualIntensity * 0.2})`,
    filter: `brightness(${0.7 + actualIntensity * 0.6})`,
  };
  
  // 内部球体的样式
  const innerStyle = {
    backgroundColor: color,
    opacity: actualIntensity,
    boxShadow: `inset 0 0 ${20 * actualIntensity}px rgba(255, 255, 255, ${0.6 + actualIntensity * 0.4})`,
  };
  
  // 光晕样式
  const glowRingStyle = {
    borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${actualIntensity * 0.5})`,
    opacity: actualIntensity,
    transform: `scale(${0.9 + actualIntensity * 0.2})`,
  };
  
  // 灯丝样式
  const filamentStyle = {
    opacity: actualIntensity,
  };
  
  // 光线样式
  const raysStyle = {
    opacity: actualIntensity * 0.8,
    transform: `scale(${0.8 + actualIntensity * 0.4})`,
  };
  
  return (
    <div className="orb-container" ref={orbRef} style={glowStyle}>
      <div className="orb-inner" style={innerStyle}>
        {children}
        <div className="orb-filament" style={filamentStyle}></div>
      </div>
      <div className="orb-glow" style={glowRingStyle}></div>
      <div className="orb-rays" style={raysStyle}></div>
    </div>
  );
} 