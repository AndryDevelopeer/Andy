import {NavLink} from "react-router-dom";
import s from "./DialogsElement.module.css";
import React from "react";

const DialogsElement=(props)=> {
    let dialogsElements = props.dialogs.map(d =>
        <NavLink to={"message"}>
            <div className={s.itemDialog}>
                <div className={s.itemDialogAva}><img src={d.ava} alt=""/></div>
                <div className={s.itemFriends}>
                    <div className={s.name}>{d.name}</div>
                    <div className={s.unread}>{d.unread}</div>
                </div>
            </div>
        </NavLink>)
    return (
       <div>{dialogsElements}</div>
    )
}
export default DialogsElement