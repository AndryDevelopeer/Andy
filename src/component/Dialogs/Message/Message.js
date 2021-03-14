import s from "./Message.module.css"
import React from "react";

/*презинтационнная компонента*/
const Message = (props) => {
    /* вся логика в MessageContainer*/
    let changeMessage = (e) => {
        let text = e.target.value;//берем значение инпут таргет
        props.addMessage(text)//вызываем адмесадж из пропсов
    }
    return (
        <div className={s.dialogs}>
            <div className={s.message}>
                {props.text}
            </div>
            <div className={s.messageArea}>
                <input onChange={changeMessage} className={s.input} //при смене значения вызываем функцию
                       value={props.newTextMessage}/>
                <button onClick={props.sendMessage} className={s.button}/>
                {/*при клике вызываем функцию*/}
                {/*вызывает функции при клике*/}
            </div>
        </div>
    )
}
export default Message