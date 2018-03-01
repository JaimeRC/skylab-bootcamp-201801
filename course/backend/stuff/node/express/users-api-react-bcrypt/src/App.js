import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './components/Button/styles/main.css'
import Input from './components/Input/Input'
import apiClient from './apiClient'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: "",
      newPassword: "",
      text: "",
      result: {}
    }
  }

  validate = () => {
    apiClient.validateUser(this.state.username, this.state.password)
      .then(res => this.setState({ result: res.data }))
  }

  create = () => {
    apiClient.createUser(this.state.username, this.state.password)
      .then(res => {
        console.log(res.data)
        this.setState({ result: res.data })
      })
  }

  updatePassword = () => {
    apiClient.changePassword(this.state.username, this.state.password)
      .then(res => this.setState({ result: res.data }))
  }

  onClick = e => {
    if (this.refs.example_1.getValue() === "" || this.refs.example_2.getValue() === "") {
      this.setState({ text: "Introduce el usuario o la contraseña correcta" })
    } else {
      this.setState({
        username: this.refs.example_1.getValue(),
        password: this.refs.example_2.getValue()
      })
    }
  }

  onClickNewPassword = e => {
    if (this.refs.example_1.getValue() === "" || this.refs.example_2.getValue() === "" || this.refs.example_3.getValue() === "") {
      this.setState({ text: "No estan rellenados todos los campos" })
    } else {
      this.setState({
        username: this.refs.example_1.getValue(),
        password: this.refs.example_2.getValue(),
        newPassword: this.refs.example_3.getValue()
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Users-Api</h1>
        </header>

        <Input ref="example_1" placeholder={"User"} />
        <Input ref="example_2" placeholder={"Password"} />

        {/*<Button onSubmit={this.create()} onClick={this.onClick} text={"Create"} />*/}

        <form onSubmit={e => { e.preventDefault(); this.create() }}>
          <button className="round-red-button" type="submit" onClick={this.onClick}>Create</button>
        </form>

        {/*<Button onSubmit={this.validate()} onClick={this.onClick} text={"Login"} />*/}

        <form onSubmit={e => { e.preventDefault(); this.validate() }}>
          <button className="round-red-button" type="submit" onClick={this.onClick}>Login</button>
        </form>

        <Input ref="example_3" placeholder={"New Password"} />

        {/*<Button onSubmit={this.updatePassword()} onClick={this.onClickNewPassword} text={"Update Password"} />*/}

        <form onSubmit={e => { e.preventDefault(); this.updatePassword() }}>
          <button className="round-red-button" type="submit" onClick={this.onClickNewPassword}>Update Password</button>
        </form>
        <h5>{this.state.text}</h5>
        <h5>{this.state.result.status}</h5>
        <h5>{this.state.result.message}</h5>
        <h5>{this.state.result.error}</h5>
      </div>
    );
  }
}

export default App;
