import React from 'react'
import Input from '../Input/index'

function Modal(props) {
    console.log(props.user)
    return (
        <div className="reveal" id="modaluser" data-reveal>
            <Input title={props.user.name} placeholder={"Name"} refs={"name"}/>
            <Input title={props.user.surname} placeholder={"Surname"} refs={"surname"} />
            <Input title={"Email"} placeholder={"Email"} refs={"username"}/>
            <Input title={"Username"} placeholder={"Username"} refs={"username"}/>
            <Input title={"Password"} placeholder={"Password"} refs={"password"}/>

            <button className="button" onClick={props.onEdit}>Edit</button>
            <button className="button" onClick={props.onRemove}>Delete</button>
            <button className="close-button" data-close aria-label="Close reveal" type="button">
                <span aria-hidden="false">&times;</span>
            </button>
        </div>
    )
}

export default Modal