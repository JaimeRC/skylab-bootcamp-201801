import React from 'react'


class HangmanPlay extends React.Component {
    constructor() {
        super()
        this.state = {
            letter: ""
        }
    }

    playAgain = () => {
        this.props.onPlayAgain()
    }

    setLetter = (e) => {
        this.setState({ letter: e.target.value })
    }

    onTry = () => {
        this.props.onTry(this.state.letter)
        this.setState({ letter: "" })
    }

    render() {
        if (this.props.showPlay) {
            let result = ""
            if (typeof this.props.status === "boolean") {
                this.props.status ? result = "YOU WIN" : result = "YOU LOSE"
                this.playAgain()
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
        return ""
    }
}

export default HangmanPlay