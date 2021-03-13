import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const state = props.store.getState();
    const dialogsElements = state.dialogsPage.dialogs.map(d =>
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
        <Dialogs dialogsElements={dialogsElements} store={props.store}/>
    )
}


export default DialogsContainer;

