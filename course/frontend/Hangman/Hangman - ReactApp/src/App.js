import React, { Component } from 'react';
import './App.css';
import Hangman from './utilities/main.js'
import HangmanNewGame from './components/HangmanNewGame'
import HangmanPlay from './components/HangmanPlay'
import HangmanStart from './components/HangmanStart'

class HangmanApp extends React.Component {
  constructor() {
    super()
    this.state = {
      attempts: 0,
      status: "",
      message: "",
      game: {},
      showNewGame: true,
      showStart: false,
      showPlay: false
    }
  }

  playAgain = () => {
    this.setState({
      showNewGame: true,
      showPlay: true
    })
  }

  newGame = () => {
    this.setState({
      attempts: 0,
      status: "",
      message: "",
      game: undefined,
      showNewGame: false,
      showStart: true,
    })
  }

  start = (word, attempts) => {
    this.setState({
      attempts,
      showStart: false,
      showPlay: true,
    })
    const game = new Hangman(word, attempts)
    this.setState({ game })
  }

  try = (letter) => {
    var tried = this.state.game.try(letter)
    this.setState({
      attempts: tried.attempts,
      message: tried.message,
      status: tried.status
    })
  }

  render() {
    return (
      <div>
        <HangmanNewGame
          onNewGame={this.newGame}
          showNewGame={this.state.showNewGame}
        />
        <HangmanStart
          onStart={this.start}
          showStart={this.state.showStart}
        />
        <HangmanPlay
          onTry={this.try}
          attempts={this.state.attempts}
          message={this.state.message}
          status={this.state.status}
          showPlay={this.state.showPlay}
          onPlayAgain={this.playAgain}
        />
      </div>
    )
  }
}
export default HangmanApp;
