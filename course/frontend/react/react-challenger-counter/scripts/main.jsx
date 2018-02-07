class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    upCount = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    resetCount = (e) => {
        e.preventDefault()
        this.setState({ count: 0 })
    }

    downCount = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })

    }

    render() {
        return <div>
            <h2 className="result">{this.state.count}</h2>
            <button className="buttonUp" onClick={this.upCount}>UP</button>
            <button className="buttonReset" onClick={this.resetCount}>RESET</button>
            <button className="buttonDown" onClick={this.downCount}>DOWN</button>
        </div>
    }
}

ReactDOM.render(<Counter />,
    document.getElementById('root'))