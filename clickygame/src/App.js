import React, { Component } from 'react';
import cards from './cards';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Card from './components/Card';

class App extends Component {
  state={
    cards,
    score: 0,
    highScore: 0,
    clickCards: []
  }

  render() {
    return(
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Col key={card.id}>
                <Card
                  key={card.id}
                  url={card.url}
                  alt={card.name}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    )
  }
  
}

export default App;
