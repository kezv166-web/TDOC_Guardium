import React from 'react';

export default function Toast({ message, type = 'error' }) {
  if (!message) return null;

  const styles = {
    error: {
      gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
      glow: 'rgba(239, 68, 68, 0.4)',
      icon: '✕'
    },
    success: {
      gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)',
      glow: 'rgba(46, 204, 113, 0.4)',
      icon: '✓'
    },
    warning: {
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      glow: 'rgba(245, 158, 11, 0.4)',
      icon: '⚠'
    },
    info: {
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      glow: 'rgba(139, 92, 246, 0.4)',
      icon: 'ℹ'
    }
  };

  const currentStyle = styles[type] || styles.error;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      {/* Toast card */}
      <div style={toastWrapperStyle}>
        {/* Glow effect */}
        <div style={{
          ...glowStyle,
          background: currentStyle.gradient,
          boxShadow: `0 0 30px ${currentStyle.glow}`
        }}></div>

        {/* Main content */}
        <div style={{
          ...contentStyle,
          background: currentStyle.gradient
        }}>
          {/* Icon */}
          <div style={iconWrapperStyle}>
            <span style={iconStyle}>{currentStyle.icon}</span>
          </div>

          {/* Message */}
          <span style={messageStyle}>{message}</span>
        </div>

        {/* Circuit lines decoration */}
        <div style={circuitLeftStyle}></div>
        <div style={circuitRightStyle}></div>
      </div>
    </div>
  );
}

const keyframes = `
  @keyframes slideUp {
    from {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

const containerStyle = {
  position: 'fixed',
  bottom: '12px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 50,
  animation: 'slideUp 0.3s ease-out',
  pointerEvents: 'none'
};

const toastWrapperStyle = {
  position: 'relative',
  pointerEvents: 'auto'
};

const glowStyle = {
  position: 'absolute',
  inset: '-4px',
  borderRadius: '8px',
  filter: 'blur(12px)',
  opacity: 0.6,
  animation: 'pulse 2s infinite'
};

const contentStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 12px',
  borderRadius: '8px',
  color: 'white',
  fontSize: '13px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  maxWidth: '260px'
};

const iconWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  flexShrink: 0
};

const iconStyle = {
  fontSize: '14px',
  fontWeight: 'bold'
};

const messageStyle = {
  flex: 1,
  lineHeight: '1.4',
  fontWeight: '500'
};

const circuitLeftStyle = {
  position: 'absolute',
  left: '-20px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '20px',
  height: '1px',
  background: 'linear-gradient(to left, rgba(255, 255, 255, 0.3), transparent)',
  pointerEvents: 'none'
};

const circuitRightStyle = {
  position: 'absolute',
  right: '-20px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '20px',
  height: '1px',
  background: 'linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent)',
  pointerEvents: 'none'
};
