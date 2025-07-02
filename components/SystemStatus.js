import { useState, useEffect } from 'react';

const SystemStatus = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [metrics, setMetrics] = useState({
    daoHealth: 0,
    networkNodes: 0,
    activeProjects: 0,
    neuralActivity: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        daoHealth: Math.floor(Math.random() * 20) + 85, // 85-100%
        networkNodes: Math.floor(Math.random() * 50) + 150, // 150-200
        activeProjects: Math.floor(Math.random() * 5) + 12, // 12-17
        neuralActivity: Math.floor(Math.random() * 30) + 70, // 70-100%
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const getStatusColor = (value, threshold = 80) => {
    if (value >= threshold) return '#00ff00';
    if (value >= threshold - 20) return '#ffff00';
    return '#ff0040';
  };

  return (
    <div 
      className={`system-status ${isMinimized ? 'minimized' : ''}`}
      onMouseEnter={() => setIsMinimized(false)}
      onMouseLeave={() => setIsMinimized(true)}
    >
      <div className="status-header">
        <div className="terminal-controls">
          <span className="control-dot red"></span>
          <span className="control-dot yellow" onClick={toggleMinimize}></span>
          <span className="control-dot green"></span>
        </div>
        <span className="status-title">SYSTEM STATUS</span>
        <div className="status-indicator active"></div>
      </div>
      
      {!isMinimized && (
        <div className="metrics-grid">
        <div className="metric">
          <div className="metric-label">DAO HEALTH</div>
          <div className="metric-value" style={{ color: getStatusColor(metrics.daoHealth) }}>
            {metrics.daoHealth}%
          </div>
          <div className="metric-bar">
            <div 
              className="metric-fill" 
              style={{ 
                width: `${metrics.daoHealth}%`,
                backgroundColor: getStatusColor(metrics.daoHealth)
              }}
            ></div>
          </div>
        </div>
        
        <div className="metric">
          <div className="metric-label">NETWORK NODES</div>
          <div className="metric-value" style={{ color: '#00ffff' }}>
            {metrics.networkNodes}
          </div>
        </div>
        
        <div className="metric">
          <div className="metric-label">ACTIVE PROJECTS</div>
          <div className="metric-value" style={{ color: '#ff00ff' }}>
            {metrics.activeProjects}
          </div>
        </div>
        
        <div className="metric">
          <div className="metric-label">NEURAL ACTIVITY</div>
          <div className="metric-value" style={{ color: getStatusColor(metrics.neuralActivity) }}>
            {metrics.neuralActivity}%
          </div>
          <div className="metric-bar">
            <div 
              className="metric-fill" 
              style={{ 
                width: `${metrics.neuralActivity}%`,
                backgroundColor: getStatusColor(metrics.neuralActivity)
              }}
            ></div>
          </div>
        </div>
      </div>
      )}
      
      <style jsx>{`
        .system-status {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 280px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid #ff00ff;
          border-radius: 5px;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          z-index: 100;
          box-shadow: 
            0 0 20px rgba(255, 0, 255, 0.3),
            inset 0 0 20px rgba(255, 0, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .system-status.minimized {
          height: auto;
          opacity: 0.7;
        }
        
        .system-status:hover {
          opacity: 1;
          box-shadow: 
            0 0 30px rgba(255, 0, 255, 0.5),
            inset 0 0 30px rgba(255, 0, 255, 0.15);
        }
        
        .metrics-grid {
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .status-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 0, 255, 0.1);
          border-bottom: 1px solid #ff00ff;
        }
        
        .terminal-controls {
          display: flex;
          gap: 5px;
        }
        
        .control-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .control-dot:hover {
          transform: scale(1.2);
        }
        
        .control-dot.red { 
          background: #ff0040; 
        }
        
        .control-dot.yellow { 
          background: #ffff00; 
        }
        
        .control-dot.green { 
          background: #00ff40; 
        }
        
        .status-title {
          color: #ff00ff;
          font-weight: bold;
          letter-spacing: 1px;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff00;
          box-shadow: 0 0 10px #00ff00;
          animation: pulse-indicator 2s infinite;
        }
        
        @keyframes pulse-indicator {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .metrics-grid {
          padding: 12px;
          display: grid;
          gap: 12px;
        }
        
        .metric {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .metric-label {
          color: #888;
          font-size: 9px;
          letter-spacing: 0.5px;
        }
        
        .metric-value {
          font-size: 14px;
          font-weight: bold;
          text-shadow: 0 0 5px currentColor;
        }
        
        .metric-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .metric-fill {
          height: 100%;
          transition: width 0.5s ease;
          box-shadow: 0 0 5px currentColor;
        }
        
        @media (max-width: 768px) {
          .system-status {
            width: 240px;
            top: 10px;
            right: 10px;
            font-size: 10px;
          }
          
          .metric-value {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default SystemStatus;