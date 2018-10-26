import React from 'react'
import Image from './home.jpg'

function Home(props) {
    return (
        <div>

            <img src={Image} data-interchange="[assets/img/interchange/small.jpg, small]" alt="home"/>
            <a className="expanded button" href="/Create">Create User</a>
            <br/>
            <a className="expanded button" href="/Search">Search</a>
        </div>
    )
}

export default Home