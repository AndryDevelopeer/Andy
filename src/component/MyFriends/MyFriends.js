import React from "react"
import {Redirect} from "react-router-dom";

const MyFriends = (props) => {
    if(props.isAuth===false) return <Redirect to={"/login"}/>
    return<div>{props.friend}</div>
}
export default MyFriends;