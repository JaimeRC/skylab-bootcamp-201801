'use strict'

class Task {
    constructor(title) {
        this.title = title
        this.done = false
        this.id = new Date().getTime
        //this.id = Task.count++
    }
    //static count = 0
}

class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    addTask = (task) => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.concat(new Task(this.state.input))
            }
        })
    }

    checkTask = index => {
        this.setState(prevState => {
            task: prevState.tasks.map(task => {
                if (task.id === id)
                    task.done = true
                return task
            })
        })
    }

    removeTask = index => {
        this.setState(prevState => {
            task: prevState.tasks.filter(task => {
                if (task.id !== id)
                    task.done = true
                return task
            })
        })
    }


    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <TaskInput onAddTask={this.addTask} />
                        <ButtonAllSelect task={this.state.tasks} />
                        <button id="checkAll" className="btn btn-success">Mark all as done</button>
                        <hr />
                        <TaskList tasks={this.state.tasks} onCheckTask={this.checkTask} />
                        <div className="todo-footer">
                            <strong><span className="count-todos" /></strong> Items Left
        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="todolist">
                        <h1>Already Done</h1>
                        <ul id="done-items" className="list-unstyled">
                            <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove" /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
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

    keepInput = e => this.setState(this.state.input)

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
            <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={ (e) => this.keepInput(e.target.value)} value={this.state.input} />
        </form>
    }
}

function TaskList(props) {
    return <ul id="sortable" className="list-unstyled">
        {props.tasks.map((task, index) => {
            return task.done ? '' : <li className="ui-state-default">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" defaultValue value="" onChange={(e) => {
                            e.preventDefault()
                            props.onCheckTask(index)
                        }} />{task.title}
                    </label></div></li>
        })}
    </ul>
}
function(event) {
    event.preventDefault();
    this.changeState()
}
function ButtonAllSelect(prop) {
    return <button id="checkAll" className="btn btn-success" ></button>
}

ReactDOM.render(<TaskApp />,
    document.getElementById('root'));
