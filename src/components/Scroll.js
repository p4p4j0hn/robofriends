import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    // This style keeps the app from scrolling and hides the scrollbar.
    <div className='hideScrollBar' style={{ overflowY: 'scroll', flex: '0 1 auto' }}>
      {props.children}
    </div>
  );
};

export default Scroll;
