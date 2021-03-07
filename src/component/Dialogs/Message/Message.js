import s from "./Message.module.css"
import React from "react";
import {newMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer"

const Message = (props) => {
    let text = props.dialogs.sendTextMessage.map(p =>/*достаем список собеседников из проспсов*/
        <div className={s.text}>{p.message}</div>
    )

    let addMessage = (e) => {/*функция для получения текста из импут и обновления стора*/
        let text = e.target.value;/*берет значение переменной из...*/
        props.dispatch(newMessageTextActionCreator(text)); /*render text ok!!*/
    }
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())/*вызываем функцию из стэйта*/
    };


    return (
        <div className={s.dialogs}>
            <div className={s.message}>
                {text}
            </div>
            <div className={s.messageArea}>
                <input onChange={addMessage} className={s.input}//при смене значения вызываем функцию
                       value={props.dialogs.newTextMessage}/>
                <button onClick={sendMessage} className={s.button}/>{/*при клике вызываем функцию*/}
                {/*вызывает функции при клике*/}
            </div>
        </div>
    )
}
export default Message