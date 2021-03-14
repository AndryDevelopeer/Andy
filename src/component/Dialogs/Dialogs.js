import React from "react"
import s from "./Dialogs.module.css"
import MessageContainer from "./Message/MessageContainer";


const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <div className={s.contact}>
                <h3>Message</h3>
                {props.dialogsElements}
            </div>
            <MessageContainer/>
        </div>
    )
}

export default Dialogs;

