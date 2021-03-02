import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    let alert = () => {

    }
    let newMessageElement = React.createRef();/*...этой ссылки!!! которая ссылаеться на object со свойствой ref!*/

    let addMessage = () => {
        let text = newMessageElement.current.value;/*берет значение переменной из...*/
        props.addNewMessage(text); /*render text ok!!*/
    }

    
/* nedd doing update array textmessage!!!!*/


    return (
        <div className={s.dialogs}>
            {/* <Route path={"/0"} component={Dialogs0}/>*/}
            <div className={s.message}>

            </div>
            <div className={s.messageArea}>
                <input onChange={addMessage} ref={newMessageElement} className={s.input}
                       value={props.dialogs}/>{/* вот на этот обьект*/}
                <button onClick={alert} className={s.button}/>
                {/*вызывает функции при клике*/}
            </div>
        </div>
    )
}
export default Message