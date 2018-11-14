import React, { Component } from 'react';
import cards from './cards';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Card from './components/Card';

class App extends Component {
  state={
    cards
  }

  render() {
    return(
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
    )
  }
  
}

export default App;
