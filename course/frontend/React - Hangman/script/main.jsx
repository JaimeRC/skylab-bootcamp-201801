'use strict'

class Hang extends React.Component {
    constructor() {
        super()
        this.state = {
            attempts: 0,
            wordGame: "",
            letter: "",
            status: "",
            message: ""
        }
        var game
    }

    newGame = () => {
        this.setState({
            attempts: 0,
            wordGame: "",
            letter: "",
            status: "",
            message: ""
        })
    }

    setLetterOrWord = (e) => {
        this.setState({ letter: e.target.value })
    }

    setAttempts = (e) => {
        this.setState({ attempts: e.target.value })
    }

    setLetter = (e) => {
        this.setState((prevState) => {
            return {
                letter: prevState.letter.concat(this.state.letter)
            }
        })
    }

    addWord = (word) => {
        this.game = new Hangman(this.state.letter, this.state.attempts);
        this.setState({ word: this.state.letter })
    }

    try = (letter) => {
        var tried = game.try(letter)
        if (this.state.status.length === 0) {
            this.setState((prevState) => {
                return {
                    attempts: prevState.attempts(tried.attempts),
                    message: prevState.message(tried.message),
                    status: prevState.status(tried.status)
                }
            })
        }
    }


    render() {
        <div>
            <div className="play">
                <p className="final_word" />
                <input type="button" className="button" id="button_play" defaultValue="PLAY!" onClick={this.state.newGame} />
            </div>
            <div className="word">
                <form className="formulary" onSubmit={(e) => { e.preventDefault(); this.addWord }}>
                    <input type="password" className="game_word" placeholder="Set your word!" onChange={this.setWord} value={this.state.word} />
                    <label>How many attempts do you need?</label>
                    <input type="number" name="quantity" min={1} max={30} id="number_list" onChange={this.setAttempts} value={this.state.attempts} />
                    <input type="submit" className="button" id="button_word" defaultValue="GO!" />
                </form>
            </div>
            <div className="game">
                <form className="formulary">
                    <span>You have
              <span className="game_attempts" />
                        attempts.</span>
                    <p className="hidden_word" />
                    <label>Enter a character or word</label>
                    <input type="text" className="game_tried" placeholder="" onChange={this.setLetter} value={} />
                    <input type="submit" className="button" id="button_game" defaultValue="TRY!" onClick={(e) => { e.preventDefault(); this.setLetter; this.try }} />
                </form>
            </div>
        </div>

    }
}

ReactDOM.render(<Hang />,
    document.getElementById('root'));
