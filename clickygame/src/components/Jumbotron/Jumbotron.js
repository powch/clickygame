import React from 'react';
import Container from '../Container';

const Jumbotron = () => (
  <div className='jumbotron jumbotron-fluid text-center'>
    <Container>
      <h2 className='display-3'>Click an image!</h2>
      <p className='lead'>Try to click all of the images without clicking the same one twice!</p>
    </Container>
  </div>
);

export default Jumbotron;