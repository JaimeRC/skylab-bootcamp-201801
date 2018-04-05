import React from 'react'

class Input extends React.Component{
    constructor(){
        super()

        this.state = {
            value: ""
        }
    }

    keepInput = e => {
        this.setState({ value: e.target.value })
    }

    getValue = () => {
        return this.state.value
    }

    render(){
        return(
            <div className="large-4 medium-4 cell">
            <label>{this.props.title}</label>
            <input type="text" placeholder={this.props.placeholder} onChange={this.keepInput} value={this.state.value}/>
          </div>
        )
    }
}

export default Input