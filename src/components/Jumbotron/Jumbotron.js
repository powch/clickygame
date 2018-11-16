import React from 'react';
import Container from '../Container';

const Jumbotron = props => (
  <div className='jumbotron jumbotron-fluid text-center'>
    <Container>
      {
        (!props.started)
          ? <h2 className='display-3'>Click an image!</h2>
          : (props.correctGuess)
          ? <h2 className='display-3 alert-success'>Correct!</h2>
          : <h2 className='display-3 alert-danger'>Try again!</h2>
      }
      <p className='lead'>Try to click all of the images without clicking the same one twice!</p>
    </Container>
  </div>
);

export default Jumbotron;