import React from "react"
import s from "./MyFriends.module.css"
import {NavLink} from "react-router-dom";


const MyFriends = (props) => {


    let friend = props.friends.map(f =>
        <NavLink to={"myFriends"}>
            <div className={s.itemDialog}>
                <div className={s.itemDialogAva}>
                    <img src={f.ava} alt=""/>
                </div>
                <div className={s.itemFriends}>
                    <div className={s.itemDialogName}>{f.name}</div>
                    <div className={s.message}>{f.unread}</div>
                    <div className={s.message}>{f.work}</div>
                    <div className={s.message}>{f.years} </div>
                </div>
                <div className={s.about}>{f.about}</div>

            </div>
        </NavLink>)

    return<div>{friend}</div>

}
export default MyFriends;