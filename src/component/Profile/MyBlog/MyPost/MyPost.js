import React from "react"
import s from "./MyPosts.module.css"
import {BrowserRouter, NavLink} from "react-router-dom"
/*props это обьект*/

const MyPost = (props) =>{ /*функция принимает параметры array(аргументы) внутри нее обьект {PostArray}*/
    let posts = props.array.map(p=>
        <div className={s.Blog_Post}>{/*вызываем метод массива map обьектка props сосвойством array */}
            <div className={s.Blog_Date}>{p.date}+{p.name}</div>
            <img className={s.img} src={p.img} alt=""/>
            <div className={s.Blog_Content}> {p.text}</div>
            <div className={s.like}>Мне нравиться: <NavLink to={""}>{p.like}</NavLink></div>
        </div>
    )

    return (
        <BrowserRouter>
            {posts}
        </BrowserRouter>
    )
}
export default MyPost;