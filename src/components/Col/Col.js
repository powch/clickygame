import React from 'react';

const Col = props => (
  <div className='col-sm-3 d-flex justify-content-center'>
    {props.children}
  </div>
);

export default Col;