import React from "react"
import s from "./Dialogs.module.css"
import DialogsElement from "./DialogsElement/DialogsElement";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.contact}>
                <h3>Message</h3>
                <DialogsElement dialogs={props.dialogs.dialogs}/>
            </div>
            <Message dispatch={props.dispatch}
                     dialogs={props.dialogs}/>
        </div>
    )
}


export default Dialogs;

