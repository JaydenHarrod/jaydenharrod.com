import React from 'react';
import { Pulse } from 'styled-spinkit';

export const Loader = () => {
  return (
    <div style={{ width: '100vw', textAlign: 'center' }}>
      <Pulse size={100} color="#000" />
    </div>
  );
};
