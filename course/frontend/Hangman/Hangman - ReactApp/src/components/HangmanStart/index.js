import React from 'react'

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
        this.props.onStart(this.state.word, this.state.attempts)
        this.setState({
            word: "",
            attempts: ""
        })
    }

    render() {
        if (this.props.showStart) {
            return (<div className={"word"}>
                <form className="formulary" onSubmit={(e) => { e.preventDefault(); this.onGo() }}>
                    <input type="password" className="game_word" placeholder="Set your word!" onChange={this.setWord} value={this.state.word} />
                    <label>How many attempts do you need?</label>
                    <input type="number" name="quantity" min={1} max={30} id="number_list" onChange={this.setAttempts} value={this.state.attempts} />
                    <input type="submit" className="button" id="button_word" defaultValue="GO!" />
                </form>
            </div>)
        }
        return ""

    }

}

export default HangmanStart
