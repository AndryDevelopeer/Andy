import React from "react"
import s from "./MyBlog.module.css"
import {NavLink} from "react-router-dom";
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profileReducer";
import MyBlog from "./MyBlog";



const MyBlogContainer = (props) => {

    let state = props.store.getState();
    let textNew = () => {/* вызываем функцию при клеке*/
        props.store.dispatch(addPostActionCreator());
    }
    let newPostText = (e) => {
        let text = e.target.value;/* let text = refNews.current.value;/!*достаем значение ссылки*!/*/
        props.store.dispatch(newPostTextActionCreator(text));/*выводим значение переменной text*/
    }
    let posts = state.profilePage.postArray.map(p =>
        <div className={s.Blog_Post}>{/*вызываем метод массива map обьектка props сосвойством array */}
            <div className={s.Blog_Date}>{p.date} {p.name}</div>
            <img className={s.img} src={p.img} alt=""/>
            <div className={s.Blog_Content}> {p.text}</div>
            <div className={s.like}>Мне нравиться: <NavLink to={"/myProfile"}>{p.like}</NavLink></div>
        </div>
    )

    return (
        <MyBlog textNew={textNew} newPostText={newPostText} posts={posts} inputText={state.profilePage.newPostText}/>)
}

export default MyBlogContainer;

