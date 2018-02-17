import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

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
        // tasks: prevState.tasks.concat(this.state.input)
        tasks: [...prevState.tasks, task]
      }
    })

    // COMPRESSED version! (WARN!)
    // this.setState(prevState => ({ tasks: [...prevState.tasks, this.state.input], input: '' }))
  }

  // removeTask = index => this.setState(prevState => ({ tasks: prevState.tasks.filter((task, _index) => index !== _index) }))

  // UNCOMPRESSED version ,)
  removeTask = index => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter((task, _index) => {
          return index !== _index
        })
      }
    })
  }

  render() {
    return <div>
      <TaskInput onAddTask={this.addTask} />
      <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
    </div>
  }
}

export default TaskApp
