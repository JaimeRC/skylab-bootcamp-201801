import React from 'react';
import Input from '../Input/index.js'
import apiClient from 'users-api-client-0'


class Create extends React.Component {
    constructor() {
        super()

        this.state = {
            message: "",
            name: "",
            surname: "",
            email: "",
            username: "",
            password: "",
            result: ""
        }
    }

    createUser = () => {
        const { name, surname, email, username, password } = this.state

        apiClient.register(name, surname, email, username, password)
            .then(result => this.setState({ result }))
        console.log(this.state.result)

    }

    onClick = () => {
        const { name, surname, email, username, password } = this.refs

        if (name.getValue() === "" || surname.getValue() === "" || email.getValue() === "" || username.getValue() === "" || password.getValue() === "") {
            this.setState({ message: "Rellene todos los campos" })
        } else {
            this.setState({
                name: name.getValue(),
                surname: surname.getValue(),
                email: email.getValue(),
                username: username.getValue(),
                password: password.getValue(),
                message: ""
            })
        }
    }

    render() {
        return (
            <div>
                <a href="/" className="button">Home</a>
                <form onSubmit={e => { e.preventDefault(); this.createUser() }}>
                    <h5>Create User:</h5>
                    <div className="grid-x grid-padding-x">
                        <Input title={"Name"} placeholder={"Name"} ref={"name"} />

                        <Input title={"Surname"} placeholder={"Surname"} ref={"surname"} />

                        <Input title={"Email"} placeholder={"Email"} ref={"email"} />
                    </div>
                    <div className="grid-x grid-padding-x">
                        <Input title={"Username"} placeholder={"Username"} ref={"username"} />

                        <Input title={"Password"} placeholder={"Password"} ref={"password"} />

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

export default Create