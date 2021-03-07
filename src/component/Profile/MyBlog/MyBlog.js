import React from "react"
import s from "./MyBlog.module.css"
import {NavLink} from "react-router-dom";



const MyBlog = (props) => {
debugger;
    let posts =props.posts.postArray.map(p=>
        <div className={s.Blog_Post}>{/*вызываем метод массива map обьектка props сосвойством array */}
            <div className={s.Blog_Date}>{p.date} {p.name}</div>
            <img className={s.img} src={p.img} alt=""/>
            <div className={s.Blog_Content}> {p.text}</div>
            <div className={s.like} >Мне нравиться: <NavLink to={"/myProfile"} >{p.like}</NavLink></div>
        </div>
    )

    return (
        <div className={s.Blog}>
            {posts}
        </div>
    )
}

export default MyBlog ;

