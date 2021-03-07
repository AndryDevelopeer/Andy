import React from "react"
import s from "./MyBlog.module.css"

const MyBlog = (props) => {

    let textNew = props.textNew;
    let newPostText = props.newPostText;
    let posts = props.posts;

    return (<div>
            <div className={s.writeNews}>
                <input value={props.inputText} onChange={newPostText}
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

