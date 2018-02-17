import React from 'react'

function HangmanNewGame(props) {
    if (props.showNewGame) {
        return (<div className="play">
            <p className="final_word" />
            <input type="button" className="button" id="button_play" defaultValue="PLAY!" onClick={(e) => { e.preventDefault(); props.onNewGame() }} />
        </div>)
    }
    return ""
}


export default HangmanNewGame