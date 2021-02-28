import React from "react"
import s from "./MyBlog.module.css"
import MyPost from "./MyPost/MyPost";



const MyBlog = (props) => {

    return (

        <div className={s.Blog}>
            <MyPost array={props.array}/>{/*отправляем аргументы array в функцию(компаненту MyPost)*/}
        </div>
    )
}

export default MyBlog ;

