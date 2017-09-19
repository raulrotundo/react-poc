import React from 'react';

const AlertComponent = (props) => {
  const { type, message } = props;
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
}

export default AlertComponent;
