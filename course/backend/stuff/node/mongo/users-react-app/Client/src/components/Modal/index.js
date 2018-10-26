import React from 'react'
import Input from '../Input/index'

function Modal(props) {
    console.log(props.user)
    return (
        <div className="reveal" id="exampleModal1" data-reveal>
            <Input title={props.user.name} placeholder={"Name"} />
            <Input title={props.user.surname} placeholder={"Surname"} />
            <Input title={"Email"} placeholder={"Email"} />
            <button className="button">Edit</button>
            <button className="button">Delete</button>
            <button className="close-button" data-close aria-label="Close reveal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Modal