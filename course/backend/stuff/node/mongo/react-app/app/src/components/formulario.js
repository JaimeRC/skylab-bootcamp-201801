import React from 'react';
import Input from './Input/index.js'
import apiClient from 'users-api-client-0'


class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            message: "",
            name: "",
            surname: "",
            email: "",
            newUsername: "",
            newPassword: "",
            username: "",
            password: "",
            result: ""
        }
    }

    updateUser = (id) => {
        const { name, surname, email, newUsername, newPassword, username, password } = this.state

        apiClient.update(id, name, surname, email, newUsername, newPassword, username, password)
            .then(result => this.setState({ result }))
    }

    onClick = () => {
        const { name, surname, email, newUsername, newPassword, username, password } = this.refs

        if (name.getValue() === "" || surname.getValue() === "" || email.getValue() === "" || newUsername.getValue() === "" || newPassword.getValue() === "" || username.getValue() === "" || password.getValue() === "") {
            this.setState({ message: "Rellene todos los campos" })
        } else {
            this.setState({
                name: name.getValue(),
                surname: surname.getValue(),
                email: email.getValue(),
                newUsername: newUsername.getValue(),
                newPassword: newPassword.getValue(),
                username: username.getValue(),
                password: password.getValue(),
                message: ""
            })
        }
    }

    render() {

        console.log(this.props.id)
            return (
                <div>
                    <form onSubmit={e => { e.preventDefault(); this.updateUser(this.props.id) }}>
                        <h5>Create User:</h5>
                        <div className="grid-x grid-padding-x">
                            <Input title={"Name"} placeholder={"Name"} ref={"name"} />

                            <Input title={"Surname"} placeholder={"Surname"} ref={"surname"} />

                            <Input title={"Email"} placeholder={"Email"} ref={"email"} />
                        </div>
                        <div className="grid-x grid-padding-x">
                            <Input title={"Username"} placeholder={"Username"} ref={"username"} />

                            <Input title={"Password"} placeholder={"Password"} ref={"password"} />

                            <Input title={"New Username"} placeholder={"New Username"} ref={"newUsername"} />

                            <Input title={"New Password"} placeholder={"New Password"} ref={"newPassword"} />
                            <div className="large-4 medium-4 cell">
                                <br />
                                <button type="submit" className="success button" onClick={this.onClick}>Create</button>
                                <label>{this.state.message}</label>
                            </div>
                        </div>
                    </form>
                    <label>{this.state.result.status}</label>
                </div>
            )

    }

}

export default Form