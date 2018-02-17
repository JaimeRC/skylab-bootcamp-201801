import React from 'react'


class TaskInput extends React.Component {
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }

    keepInput = input => this.setState({ input: input })

    addTask = () => {
        this.props.onAddTask(this.state.input)

        this.setState({ input: '' })
    }

    render() {
        return <form onSubmit={e => {
            e.preventDefault()

            this.addTask()
        }
        }>
            <input type="text" className="round-blue-input" placeholder="Input task" onChange={(e) => this.keepInput(e.target.value)} value={this.state.input} />
            &nbsp;
        <button type="submit" className="round-red-button">Add</button>
        </form>
    }
}

export default TaskInput