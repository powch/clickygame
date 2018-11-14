import React from 'react';
import Container from '../Container';

const Navbar = props => (
  <nav className='navbar navbar-light bg-light'>
    <Container>
      <a className='navbar-brand' href='/'>Clickygame</a>
      <h3>Score: {props.score} | Highscore: {props.highScore}</h3>
    </Container>
  </nav>
);

export default Navbar;