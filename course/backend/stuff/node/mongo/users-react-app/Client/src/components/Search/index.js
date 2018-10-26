import React from 'react';
import apiClient from '../../apiClient/apiClient'
import Input from '../Input/index.js'
import List from '../List/index.js'
import Modal from '../Modal/index.js'

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
        apiClient.listUsers()
            .then(users => {
                this.setState({ users })
            })
        // console.log(this.state.userSearch)
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
                <Modal user={this.state.user} />
            </div>
        )
    }
}

export default Search