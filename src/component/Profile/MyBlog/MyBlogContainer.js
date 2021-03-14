import React from "react"
import s from "./MyBlog.module.css"
import {NavLink} from "react-router-dom";
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profileReducer";
import MyBlog from "./MyBlog";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.postArray.map(p =>
            <div className={s.Blog_Post}>{/*вызываем метод массива map обьектка props сосвойством array */}
                <div className={s.Blog_Date}>{p.date} {p.name}</div>
                <img className={s.img} src={p.img} alt=""/>
                <div className={s.Blog_Content}> {p.text}</div>
                <div className={s.like}>Мне нравиться: <NavLink to={"/myProfile"}>{p.like}</NavLink></div>
            </div>
        ),
        inputText:state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        textNew: ()=>dispatch(addPostActionCreator()),
        newPostText:(text)=>dispatch(newPostTextActionCreator(text))
    }
}
const MyBlogContainer =connect(mapStateToProps,mapDispatchToProps)(MyBlog);//перерисовывает компоненты
export default MyBlogContainer;

