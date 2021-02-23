import React from "react"
import News from "../News/News";
import {NavLink} from "react-router-dom";
import s from   "./Notification.module.css"

const Notification =()=>{
    return(
        <div>
            <h3 className={s.link}>
                <NavLink to="" >
                News
            </NavLink>
                </h3>
            <News name={"Andrew Gerasimenko"} do={"Отправил вам сообщение"}/>
            <News name={"Mark Stavrovich"} do={"Понравилась ваша запись"}/>
            <News name={"Nikolay Iceman"} do={"Хочет добавить вас в друзья"}/>
        </div>
    )
}
export default Notification;