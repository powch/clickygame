import React from 'react';
import './Card.css';

const Card = props => (
  <div className="card mb-4">
    <img
      className="card-img"
      id={props.id}
      src={props.url}
      alt={props.name}
      onClick={props.handleClickEvent}
    />
  </div>
);

export default Card;