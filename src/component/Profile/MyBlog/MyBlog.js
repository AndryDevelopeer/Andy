import React from "react"
import s from "./MyBlog.module.css"

const MyBlog = (props) => {
    let newPostElement=React.createRef();
    let newPostText =()=>{
        let text=newPostElement.current.value;
        props.newPostText(text)
    }
    let textNew = props.textNew;
   /* let newPostText = props.newPostText;*/
    let posts = props.posts;


    return (<div>
            <div className={s.writeNews}>
                <input value={props.inputText} onChange={newPostText} ref={newPostElement}
                       className={s.watsNews}/>{/*ссылка*/}
                <button onClick={textNew}>send</button>
                {/* отслеживаем клик по кнопке и вызываем функцию*/}
            </div>
            <div className={s.Blog}>
                {posts}
            </div>
        </div>
    )
}

export default MyBlog;

