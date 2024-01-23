import React from 'react';

const Scroll = (props) => {
  return(
    <div style={{ overflowY: 'scroll', flex: '0 1 auto' }}>
      {props.children}
    </div>
  );
}

export default Scroll;
