import React from "react"
import s from "./MyBlog.module.css"

const MyBlog = (props) => {
    let changePostText = (e) => {
        let text = e.target.value;//берем значение таргета
        props.newPostText(text)
    }
    let textNew = props.textNew;
    let posts = props.posts;

    return (<div>
            <div className={s.writeNews}>
                <input value={props.inputText} onChange={changePostText}
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

