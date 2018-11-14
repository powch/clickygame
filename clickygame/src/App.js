import React, { Component } from 'react';
import cards from './cards';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Col from './components/Col';
import Row from './components/Row';
import Card from './components/Card';
import Jumbotron from './components/Jumbotron/Jumbotron';

class App extends Component {
  state={
    cards,
    score: 0,
    highScore: 0,
    clickCards: []
  }

  handleClickEvent = event => {
    const { id } = event.target;

    console.log(event);

    const newClick = this.state.clickCards;
    newClick.push(id);

    const shuffled = this.state.cards.map(a => [Math.random(), a]).sort((a,b) => a[0] - b[0]).map(a => a[1]);

    this.setState({
      cards: shuffled,
      clickCards: newClick
    });
  }

  render() {
    return(
      <Wrapper>
        <Navbar 
          score={this.state.score} 
          highScore={this.state.highScore} 
        />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Col key={card.id}>
                <Card
                  onClick={this.handleClickEvent}
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
