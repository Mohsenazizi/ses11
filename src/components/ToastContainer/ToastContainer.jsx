import React from 'react'

export const ToastContainer = ({toasts}) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right:'20px'
    }}>
      {
        toasts.map(item => (
          <div>
            {item}
          </div>
        ))
      }
    </div>
  )
}
