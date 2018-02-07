'use strict'

class TaskApp extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: [],
            tasksFinish: []
        }
    }

    addTask = (task) => {
        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, task]
            }
        })
    }

    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => index !== _index)
                /* tasksFinish: [...presState.tasks.filter((task, _index) => index === _index)]*/
            }
        })
    }

    addFinishTask = index => {
        this.setState(prevState => {
            return {
                tasksFinish: prevState.tasks.filter((task, _index) => index === _index)
            }
        })
    }

    render() {
        return <div>
            <TaskInput
                onAddTask={this.addTask}
            />
            <TaskList
                tasks={this.state.tasks}
                onRemoveTask={this.removeTask}
            />
            <DoneTaskList
                tasksFinish={this.state.tasksFinish}
                onRemoveTask={this.addFinishTask}
            />
        </div>
    }

}

class TaskInput extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    keepInput = e => this.setState({ input: e.target.value })
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
            <input type="text" className="round-blue-input" placeholder="Input task" onChange={this.keepInput} value={this.state.input} />
            <button type="submit" className="round-red-button">Add!</button>
        </form>
    }
}

function TaskList(props) {
    return <ul>
        {
            props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
                e.preventDefault()
                props.removeTask(index)
            }}>🗑</a></li>)
        }
    </ul>
}

function DoneTaskList(props) {
    return <ul>
        {
            props.tasksFinish.map(task => <li>{task}</li>)
        }
    </ul>
}

ReactDOM.render(<TaskApp />,
    document.getElementById('root'))