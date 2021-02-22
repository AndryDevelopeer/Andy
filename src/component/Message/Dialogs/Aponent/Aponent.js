import React from "react"
import s from "./Aponent.module.css"



const Aponent = (props) => {
    return (
        <div>
            <a href=""><div className={s.name}>{props.name}</div></a>
            <div className={s.message}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
        </div>


    )
}
export default Aponent;