import { useState, useEffect } from 'react';

const DataTerminal = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const terminalData = [
    '> SYSTEM INITIALIZATION...',
    '> NEURAL NETWORK ACTIVE',
    '> SCANNING DAO PROTOCOLS...',
    '> ANALYZING GOVERNANCE STRUCTURES',
    '> TALENT MAPPING COMPLETE',
    '> READY FOR CONSULTATION',
    '> VAGABOND ARTHOUSE ONLINE',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < terminalData.length) {
        const text = terminalData[currentLine];
        let charIndex = 0;
        
        const typeWriter = setInterval(() => {
          if (charIndex < text.length) {
            setDisplayText(prev => prev + text[charIndex]);
            charIndex++;
          } else {
            clearInterval(typeWriter);
            setTimeout(() => {
              setCurrentLine(prev => prev + 1);
              setDisplayText(prev => prev + '\n');
            }, 1000);
          }
        }, 50);
      } else {
        // Reset after all lines are displayed
        setTimeout(() => {
          setCurrentLine(0);
          setDisplayText('');
        }, 3000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentLine]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div 
      className={`data-terminal ${isMinimized ? 'minimized' : ''}`}
      onMouseEnter={() => setIsMinimized(false)}
      onMouseLeave={() => setIsMinimized(true)}
    >
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control-dot red"></span>
          <span className="control-dot yellow" onClick={toggleMinimize}></span>
          <span className="control-dot green"></span>
        </div>
        <span className="terminal-title">NEURAL_INTERFACE_v2.1</span>
      </div>
      {!isMinimized && (
        <div className="terminal-content">
          <pre className="terminal-text">{displayText}</pre>
          <span className="cursor">█</span>
        </div>
      )}
      
      <style jsx>{`
        .data-terminal {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 350px;
          height: 200px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid #00ffff;
          border-radius: 5px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          z-index: 100;
          box-shadow: 
            0 0 20px rgba(0, 255, 255, 0.3),
            inset 0 0 20px rgba(0, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .data-terminal.minimized {
          height: auto;
          opacity: 0.7;
        }
        
        .data-terminal:hover {
          opacity: 1;
          box-shadow: 
            0 0 30px rgba(0, 255, 255, 0.5),
            inset 0 0 30px rgba(0, 255, 255, 0.15);
        }
        
        .terminal-content {
          animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(0, 255, 255, 0.1);
          border-bottom: 1px solid #00ffff;
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
        
        .control-dot.red { background: #ff0040; }
        .control-dot.yellow { background: #ffff00; }
        .control-dot.green { background: #00ff40; }
        
        .terminal-title {
          color: #00ffff;
          font-size: 10px;
          letter-spacing: 1px;
        }
        
        .terminal-content {
          padding: 12px;
          height: calc(100% - 40px);
          overflow: hidden;
          position: relative;
        }
        
        .terminal-text {
          color: #00ff00;
          margin: 0;
          line-height: 1.4;
          white-space: pre-wrap;
        }
        
        .cursor {
          color: #00ffff;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          .data-terminal {
            width: 280px;
            height: 160px;
            bottom: 10px;
            right: 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default DataTerminal;