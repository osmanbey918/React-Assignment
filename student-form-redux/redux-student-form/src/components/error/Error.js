import React from 'react';

function Error({ errors }) {
  return (
    <div>
      {errors && errors.map((error, index) => (
        <p key={index} style={{ color: 'red' }}>{error}</p>
      ))}
    </div>
  );
}

export default Error;
