import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Notification.module.css"

const Notification = (props) => {
    return (
        <div className={s.Notification}>
            <NavLink to={"/news"}><h3>News</h3></NavLink>
            <div>{props.newsFriends}</div>
        </div>
    )
}
export default Notification;