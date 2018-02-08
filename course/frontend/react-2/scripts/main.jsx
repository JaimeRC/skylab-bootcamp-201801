class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            tasks: [],
            tasksFinish: []
        }
    }

    keepInput = e => this.setState({ input: e.target.value })

    addTask = () => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.concat(this.state.input),
                input: ''
            }
        })
    }

    addTaskFinish = task => {
        this.setState(prevState => {
            return {
                tasksFinish: prevState.tasksFinish.concat(task)
            }
        })
    }

    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => index !== _index)
            }
        })
    }

    render() {
        return <div>
            <TaskInput onAddTask={this.addTask} onInputChange={this.keepInput} inputValue={this.state.input} />
            <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} onAddTaskFinish={this.addTaskFinish} />
            <TaskListFinish tasksFinish={this.state.tasksFinish} />
        </div>
    }
}

function TaskInput(props) {
    return <form onSubmit={e => {
        e.preventDefault()
        props.onAddTask()
    }}>
        <input type="text" className="round-blue-input" placeholder="Input task" onChange={props.onInputChange} value={props.inputValue} />
        <button type="submit" className="round-red-button">ADD!</button>
    </form>

}

function TaskList(props) {
    return <ul>
        {props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
            e.preventDefault();
            props.onRemoveTask(index)
            props.onAddTaskFinish(task)
        }}>🗑</a></li>)}
    </ul>
}

function TaskListFinish(props) {
    return <ul>
        <br />
        <label>Task Finish:</label>
        {props.tasksFinish.map((task, index) => <li>{task}</li>)}
    </ul>
}

ReactDOM.render(<TaskApp />,
    document.getElementById('root'));
