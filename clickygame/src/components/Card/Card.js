import React from 'react';

const Card = props => (
  <div className='card'>
    <img className='card-img' src={props.url} alt={props.name} />
  </div>
);

export default Card;