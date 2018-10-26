import React from 'react'
import './styles/main.css'

class Input extends React.Component {
    constructor() {
        super()

        this.state = {
            value: ""
        }
    }

    onChange = e => {
        this.setState({ value: e.target.value })
    }

    getValue = () => {
        return this.state.value
    }

    render() {
        return <div>
            <input type="text" className="round-blue-input"  placeholder={this.props.placeholder} onChange={this.onChange} value={this.state.value} />
        </div>
    }
}

export default Input
