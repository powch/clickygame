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
    correctGuess: true,
    started: false
  };

  incorrectGuess = () => {
    const score = this.state.score;
    const highScore = this.state.highScore;

    this.setState({
      score: 0,
      highScore: (score <= highScore) ? highScore : score,
      clickedCards: [],
      correctGuess: false
    });
  };

  handleClickEvent = event => {
    const { id } = event.target;
    const newClickedArr = this.state.clickedCards;
    const shuffled = this.state.cards
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    const found = newClickedArr.find(cardID => cardID === id);

    if (newClickedArr.length && found) {
      this.incorrectGuess();
    } else {
      newClickedArr.push(id);
      this.setState({
        cards: shuffled,
        clickedCards: newClickedArr,
        score: this.state.score + 1,
        correctGuess: true,
        started: true
      });
    }
  };
  

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron
          correctGuess={this.state.correctGuess}
          started={this.state.started}
        />
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
