import React from 'react'

function TaskList(props) {
    return <ul>
        {props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
            e.preventDefault()

            props.onRemoveTask(index)
        }}>🗑</a></li>)}
    </ul>
}
export default TaskList