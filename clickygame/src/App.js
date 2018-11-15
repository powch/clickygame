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
  state = {
    cards,
    score: 0,
    highScore: 0,
    clickedCards: [],
    correctGuess: true
  };

  resetState = () => {
    this.setState({
      score: 0,
      highScore: 0,
      clickedCards: []
    });
  };

  handleClickEvent = event => {
    const { id } = event.target;
    const newClick = this.state.clickedCards;
    const shuffled = this.state.cards
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

    console.log(newClick);

    if (!newClick.length) {
      newClick.push(id);
    } else {
      let correct = true;

      newClick.forEach(cardID => {
        if (correct) {
          if (cardID === id) {
            correct = false;
          }
        }
      });

      if (correct) {
        this.setState({
          cards: shuffled,
          score: this.state.score + 1
        });
      } else {
        this.resetState();
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <Container>
          <Row>
            {this.state.cards.map(card => (
              <Col key={card.id}>
                <Card
                  handleClickEvent={this.handleClickEvent}
                  id={card.id}
                  key={card.id}
                  url={card.url}
                  alt={card.name}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
