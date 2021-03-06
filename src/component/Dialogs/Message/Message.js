import s from "./Message.module.css"
import React from "react";
import {newMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer"

const Message = (props) => {
    let text = props.dialogs.sendTextMessage.map(p =>/*dostaem spisok soobsheniy*/
        <div className={s.text}>{p.message}</div>
    )

    let addMessage = (e) => {/*obnovlyaem text input*/
        let text = e.target.value;/*берет значение переменной из...*/
        props.dispatch(newMessageTextActionCreator(text)); /*render text ok!!*/
    }
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())/*call function iz state*/
    };


    return (
        <div className={s.dialogs}>
            <div className={s.message}>
                {text}
            </div>
            <div className={s.messageArea}>
                <input onChange={addMessage} className={s.input}
                       value={props.dialogs.newTextMessage}/>
                <button onClick={sendMessage} className={s.button}/>
                {/*вызывает функции при клике*/}
            </div>
        </div>
    )
}
export default Message