import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return  {
        dialogsElements:state.dialogsPage.dialogs.map(d =>
            <NavLink to={"message"} key={d.id}>
                <div className={s.itemDialog}>
                    <div className={s.itemDialogAva}><img src={d.ava} alt=""/></div>
                    <div className={s.itemFriends}>
                        <div className={s.name}>{d.name}</div>
                        <div className={s.unread}>{d.unread}</div>
                    </div>
                </div>
            </NavLink>)
    }
}
const DialogsContainer=connect(mapStateToProps)(Dialogs)
export default DialogsContainer;

