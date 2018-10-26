import React from 'react'

class InputText extends React.Component {
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
        return this.state.velue
    }

    render() {
        return <div>
            <input type="text" className="round-blue-input" onChange={this.onChange} value={this.state.value} />
        </div>
    }
}

export default InputText
