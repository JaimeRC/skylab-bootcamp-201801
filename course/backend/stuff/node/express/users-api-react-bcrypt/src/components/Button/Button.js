import React from 'react'
import './styles/main.css'

function Button(props) {
    return (
        <form onSubmit={e => { e.preventDefault(); props.onSubmit() }}>
            <button className="round-red-button" type="submit" onClick={props.onClick()}>{props.text}</button>
        </form>

    )
}

export default Button