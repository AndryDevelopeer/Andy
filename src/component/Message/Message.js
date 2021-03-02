import React from "react"
import s from "./Message.module.css"
import { NavLink} from "react-router-dom";

const Messages = (props) => {

    let newMessageElement = React.createRef();/*...этой ссылки!!! которая ссылаеться на object со свойствой ref!*/

    let addMessage = () => {
        let text = newMessageElement.current.value;/*берет значение переменной из...*/
        alert(text)/*выводит сообщение алертом*/
    }

    let dialogsElements = props.friends.map(d =>
        <NavLink to={"message"}>
            <div className={s.itemDialog}>
                <div className={s.itemDialogAva}><img src={d.ava} alt=""/></div>
                <div className={s.itemFriends}>
                    <div className={s.name}>{d.name}</div>
                    <div className={s.unread}>{d.unread}</div>
                </div>
            </div>
        </NavLink>)

    let messageElement = props.friends.map(m =>
        <div>
            <div>
                <div className={s.nameItem}>{m.name}{m.time}</div>
                <div className={s.messageItem}>{m.message}</div>
            </div>
        </div>)

    return (
            <div className={s.content}>
                <div className={s.contact}>
                    <h3>Message</h3>
                    <div>{dialogsElements}</div>
                </div>
                <div className={s.dialogs}>
                    {/* <Route path={"/0"} component={Dialogs0}/>*/}
                    <div className={s.message}>
                        {messageElement}
                    </div>
                    <div className={s.messageArea}>
                        <input ref={newMessageElement} className={s.input}/>{/* вот на этот обьект*/}
                        <button onClick={addMessage} className={s.button}/>
                        {/*вызывает функции при клике*/}
                    </div>
                </div>
            </div>

    )
}


export default Messages;

