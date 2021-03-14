import s from "./Message.module.css"
import React from "react";

/*презинтационнная компонента*/
const Message = (props) => {
/* вся логика в MessageContainer*/
    let newPostElement=React.createRef();
    let addMessage =()=>{
        let text=newPostElement.current.value;
        props.addMessage(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.message}>
                {props.text}
            </div>
            <div className={s.messageArea}>
                <input onChange={addMessage} className={s.input} ref={newPostElement}//при смене значения вызываем функцию
                       value={props.newTextMessage}/>
                <button onClick={props.sendMessage} className={s.button}/>{/*при клике вызываем функцию*/}
                {/*вызывает функции при клике*/}
            </div>
        </div>
    )
}
export default Message