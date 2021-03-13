import s from "./Message.module.css"
import React from "react";
import {newMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer"
import Message from "./Message";

/*контейнерная компонента*/
const MessageContainer = (props) => {

    let state = props.store.getState();//достаем стэйт из пропсов
    let newTextMessage = state.dialogsPage.newTextMessage;//достаем свойство из стэйта
    let text = state.dialogsPage.sendTextMessage.map(p =>/*достаем список собеседников из проспсов*/
        <div className={s.text}>{p.message}</div>
    )
    let addMessage = (e) => {
        let text = e.target.value;
        props.store.dispatch(newMessageTextActionCreator(text));//отправляем в диспатч тип и текст
    }
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())// отправляем в диспатч тип
    }
    return (
        <Message text={text} addMessage={addMessage} sendMessage={sendMessage} newTextMessage={newTextMessage}/>
        /*отправляем все это дело через проспы в мессадж*/
    )
}

export default MessageContainer;