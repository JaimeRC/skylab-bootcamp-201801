import InputText from './InputText'
import React from 'react'

class ShowText extends React.Component {
    constructor() {
        super()

        this.state = {
            text: ""
        }
    }

    onClick = e => {
        if (this.ref.example.getValue() == "") {
            this.setState({ text: "Sin datos" })
        } else {
            this.setState({text: this.refs_example.getValue()})
        }
    }

    render() {
        return <div>
            <InputText ref="example"/>
            <button type="button" className="round-red-button" onClick={this.onClick}>ADD</button>
            <label>{this.state.text}</label>
        </div>
    }
}

ReactDOM.render(<ShowText />,
    document.getElementById('root'))