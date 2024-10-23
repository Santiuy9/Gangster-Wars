import React from 'react'
import './css/ProgressBar.css'

const ProgressBar = ({ name, TXTcolor, BGcolor, fillPercentage }) => {
  // Aseguramos que el porcentaje esté entre 0 y 100
  const clampedFillPercentage = Math.min(100, Math.max(0, fillPercentage))

  return (
    <div className="progress-bar-container">
          
      <div className="progress-bar-outer">
        <div className="progress-bar-name" style={{color: TXTcolor}}>{`${name}`}</div>
        <div 
          className="progress-bar-inner" 
          style={{ 
            width: `${clampedFillPercentage}%`,
            backgroundColor: BGcolor,
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar