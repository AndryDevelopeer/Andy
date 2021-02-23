import React from "react"
import s from "./MyMessage.module.css"

const MyMessage = (props) => {
    return (
        <div className={s.myAnswer}>
            <div>
                <a href="">{props.name}</a>
            </div>
            <div className={s.answerText}>
                {props.message}
            </div>
            <div className={s.time}>
                {props.time}
            </div>
        </div>


    )

}
export default MyMessage