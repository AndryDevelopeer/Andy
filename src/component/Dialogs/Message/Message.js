import s from "./Message.module.css"
import React from "react";

/*презинтационнная компонента*/
const Message = (props) => {
/* вся логика в MessageContainer*/
    return (
        <div className={s.dialogs}>
            <div className={s.message}>
                {props.text}
            </div>
            <div className={s.messageArea}>
                <input onChange={props.addMessage} className={s.input}//при смене значения вызываем функцию
                       value={props.newTextMessage}/>
                <button onClick={props.sendMessage} className={s.button}/>{/*при клике вызываем функцию*/}
                {/*вызывает функции при клике*/}
            </div>
        </div>
    )
}
export default Message