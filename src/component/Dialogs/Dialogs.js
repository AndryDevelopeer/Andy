import React from "react"
import s from "./Dialogs.module.css"
import MessageContainer from "./Message/MessageContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
if(props.isAuth===false) return <Redirect to={"/login"}/>
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

