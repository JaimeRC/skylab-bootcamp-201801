import React from 'react';
import apiClient from 'users-api-client-0'
import Input from '../Input/index.js'
import List from '../List/index.js'
import Modal from '../Modal/index.js'
import Form from '../formulario'

apiClient.protocol = 'http'
apiClient.host = 'localhost'
apiClient.port= '5000'


class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            userSearch: "",
            users: [],
            user: {}
        }
    }

    search = () => {
        apiClient.list()
            .then(users => {
                this.setState({ users:users.data })
            })
    }

    keepInput = () => {
        this.setState({ userSearch: this.refs.input.getValue() })
    }

    onClick = (id, name, surname) => {
        this.state.user = {
            id,
            name,
            surname
        }
    }

    render() {
        return (
            <div>
                <a href="/" className="button">Home</a>
                <form onSubmit={e => { e.preventDefault(); this.search() }}>
                    <div className="grid-x grid-padding-x">
                        <div className="medium-6 cell">
                            <Input title={"Search"} placeholder={"Search User"} ref={"input"} />
                        </div>
                        <div className="medium-6 cell">
                            <br />
                            <button type="submit" className="search button" onClick={this.keepInput}>Search</button>
                        </div>
                    </div>
                </form>
                <List users={this.state.users} onClick={this.onClick} />

                <Form id={this.state.id}/>
                <Modal user={this.state.user} />
            </div>
        )
    }
}

export default Search