'use strict'

class HangmanApp extends React.Component {
    constructor() {
        super()
        this.state = {
            attempts: 0,
            status: "",
            message: "",
            game: {}
        }
    }

    newGame = () => {
        this.setState({
            attempts: 0,
            status: "",
            message: "",
            game: undefined,
            showComponent: true
        })
    }

    start = (word, attempts) => {
        this.setState({ attempts })
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
                <HangmanNewGame onNewGame={this.newGame} />
                <HangmanStart onStart={this.start} />
                <HangmanPlay onTry={this.try} attempts={this.state.attempts} message={this.state.message} status={this.state.status} />
            </div>
        )
    }
}

function HangmanNewGame(props) {
    return (<div className="play">
        <p className="final_word" />
        <input type="button" className="button" id="button_play" defaultValue="PLAY!" onClick={(e) => { e.preventDefault(); props.onNewGame() }} />
    </div>)
}

class HangmanStart extends React.Component {
    constructor() {
        super()
        this.state = {
            attempts: 0,
            word: ""
        }
    }

    setAttempts = (e) => {
        this.setState({ attempts: e.target.value })
    }

    setWord = (e) => {
        this.setState({ word: e.target.value })
    }

    onGo = () => {
        console.log("hola")
        this.props.onStart(this.state.word, this.state.attempts)
        this.setState({
            word: "",
            attempts: ""
        })
    }

    render() {
        return (<div className="word">
            <form className="formulary" onSubmit={(e) => { e.preventDefault(); this.onGo() }}>
                <input type="password" className="game_word" placeholder="Set your word!" onChange={this.setWord} value={this.state.word} />
                <label>How many attempts do you need?</label>
                <input type="number" name="quantity" min={1} max={30} id="number_list" onChange={this.setAttempts} value={this.state.attempts} />
                <input type="submit" className="button" id="button_word" defaultValue="GO!" />
            </form>
        </div>)
    }

}

class HangmanPlay extends React.Component {
    constructor() {
        super()
        this.state = {
            letter: ""
        }
    }

    setLetter = (e) => {
        this.setState({ letter: e.target.value })
    }

    onTry = () => {
        this.props.onTry(this.state.letter)
        this.setState({ letter: "" })
    }

    render() {
        let result = ""
        if (typeof this.props.status === "boolean") {
            this.props.status ? result = "YOU WIN" : result = "YOU LOSE"
        }
        return (<div className="game">
            <form className="formulary" onSubmit={(e) => { e.preventDefault(); this.onTry() }}>
                <label>You have {this.props.attempts} attempts.</label>
                <p className="hidden_word">{this.props.message} </p>
                <p>{result}</p>
                <label>Enter a character or word</label>
                <input type="text" className="game_tried" placeholder="" onChange={this.setLetter} value={this.state.letter} />
                <input type="submit" className="button" id="button_game" defaultValue="TRY!" />
            </form>
        </div>)
    }
}

ReactDOM.render(<HangmanApp />,
    document.getElementById('root'));
