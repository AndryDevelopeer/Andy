import React from "react"
import {addPostActionCreator, newPostTextActionCreator} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";


/*
const ProfileContainer = (props) => {
       let textNew = () => {/!* вызываем функцию при клеке*!/
        props.dispatch(addPostActionCreator());
    }
    let newPostText = (e) => {
        let text = e.target.value;/!* let text = refNews.current.value;/!*достаем значение ссылки*!/!*!/
        props.dispatch(newPostTextActionCreator(text));/!*выводим значение переменной text*!/
    }
    return ( <Profile/>
    )
}*/
const mapDispatchToProps=(dispatch)=>{
    return{textNew:()=>dispatch(),
        text:(text)=>dispatch((text))
    }
}
const ProfileContainer=connect(mapDispatchToProps)(Profile);
export default ProfileContainer;