import React from 'react';
import Container from '../Container';

const Navbar = props => (
  <nav className='navbar navbar-light bg-light'>
    <Container>
      <a className='navbar-brand' href='/'>Clickygame</a>
      <h4>Score: {props.score} | Highscore: {props.highScore}</h4>
    </Container>
  </nav>
);

export default Navbar;