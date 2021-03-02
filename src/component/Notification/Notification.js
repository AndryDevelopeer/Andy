import React from "react"
import {NavLink} from "react-router-dom";
import s from "./Notification.module.css"

const Notification = (props) => {
    let newsFriends = props.friends.map(n =>
        <NavLink to=" ">
            <div className={s.News}>
                <div className={s.News_item}>
                    <div className={s.News_item_User}>
                        <div className={s.News_item_object}><img src={n.ava} alt=""/></div>
                        <div className={s.News_item_object_name}> {n.name} </div>
                    </div>
                    <div className={s.News_item_do}> {n.do} </div>
                </div>
            </div>
        </NavLink>
    )
    return (

        <div>
            <NavLink to={"/news"}><h3>News</h3></NavLink>
            <div>{newsFriends}</div>

        </div>
    )
}
export default Notification;