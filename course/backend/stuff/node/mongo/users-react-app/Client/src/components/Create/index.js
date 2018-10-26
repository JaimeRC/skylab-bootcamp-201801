import React from 'react';
import Input from '../Input/index.js'


class Create extends React.Component {
    constructor() {
        super()

        this.state = {
            message: "",
            name: "",
            surname: "",
            email: "",
            username: "",
            password: ""
        }
    }

    createUser = () => {
        if (this.state.message.length > 0) {
            const { name, surname, email, username, password } = this.state
            console.log(name + surname + email + username + password)
        }
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
                            <button type="button" className="success button" onClick={this.onClick}>Create</button>
                            <label>{this.state.message}</label>
                        </div>
                    </div>
                </form>
            </div>
        )

    }

}

export default Create