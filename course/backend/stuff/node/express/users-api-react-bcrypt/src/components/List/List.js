import React, { Component } from 'react';
import Input from '../Input/Input'

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            users: {},
            updateUser: {}
        }
    }

    update = (_id) => {
        this.setState(
            this.state.newUser = {
                name: this.refs.name.getValue(),
                surname: this.refs.surname.getValue(),
                email: this.refs.email.getValue(),
                username: this.refs.username.getValue(),
                password: this.refs.password.getValue(),
                id: _id
            })
        this.props.onUpdate(this.state.updateUser)
    }


    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map((user, index) => {
                        <li>
                            <Input ref="name" placeholder={user.name} />
                            <Input ref="surname" placeholder={user.surname} />
                            <Input ref="email" placeholder={user.email} />
                            <Input ref="username" placeholder={user.username} />
                            <Input ref="password" placeholder={user.password} />
                            <a onClick={(e) => { e.preventDefault(); this.update(user._id) }}>✅</a>
                            <a onClick={(e) => { e.preventDefault(); }}>🗑</a></li>


                    })}}
                </ul>
                }
    </div>
        )
    }
}

export default List