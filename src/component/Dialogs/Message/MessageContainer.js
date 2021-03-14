import s from "./Message.module.css"
import React from "react";
import {newMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer"
import Message from "./Message";
import {connect} from "react-redux";

/*контейнерная компонента*/

const mapStateToProps=(state)=>{
    return {
        newTextMessage:state.dialogsPage.newTextMessage,
        text:state.dialogsPage.sendTextMessage.map(p =>/*достаем список собеседников из проспсов*/
            <div className={s.text}>{p.message}</div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addMessage:(text)=> dispatch(newMessageTextActionCreator(text)),
        sendMessage:()=> dispatch(sendMessageActionCreator())
    }
}
const MessageContainer=connect(mapStateToProps, mapDispatchToProps)(Message);
export default MessageContainer;