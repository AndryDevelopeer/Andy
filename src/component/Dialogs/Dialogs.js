import React from "react"
import s from "./Dialogs.module.css"
import { NavLink} from "react-router-dom";
import DialogsElement from "./DialogsElement/DialogsElement";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
            <div className={s.content}>
                <div className={s.contact}>
                    <h3>Message</h3>
                    <DialogsElement dialogs={props.dialogs.dialogs}/>
                </div>
                <Message addNewMessage={props.addNewMessage}
                    dialogs={props.dialogs.newTextMessage}/>
            </div>
    )
}


export default Dialogs;

