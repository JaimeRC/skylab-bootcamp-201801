import React from 'react'


function List(props) {
    if (props.users) {
        return (
            <table className="stack hover">
                <thead>
                    <tr data-open>
                        <th width="150">Name</th>
                        <th width="150">Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => {
                        return (<tr data-open={`modal${user.id}`} onClick={e => { props.onClick(user.id, user.name, user.surname) }}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        )
    } else {
        return (
            <div>
                <label>No hay usuarios</label>
            </div>
        )
    }
}

export default List