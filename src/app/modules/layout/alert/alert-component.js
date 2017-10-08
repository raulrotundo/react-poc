import React from 'react';
import './alert-component.css';

const AlertComponent = (props) => {
  const { type, message } = props;
  return (
    <div className="alert-component">
      <div className={`alert alert-${type}`} role="alert">
        {message}
      </div>
    </div>
  );
}

export default AlertComponent;
