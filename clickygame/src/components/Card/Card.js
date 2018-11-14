import React from 'react';
import './Card.css';

const Card = props => (
  <div className='card mb-4'>
    <img className='card-img' src={props.url} alt={props.name} />
  </div>
);

export default Card;