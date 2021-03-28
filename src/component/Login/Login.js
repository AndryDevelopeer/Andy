import React from "react"
import s from "./Login.module.css"
import {NavLink} from "react-router-dom";

let Login = (props) => {
    console.log(props)
      return (
        <div className={s.log}>
                <NavLink to={"myProfile"}>{props.isAuth ? props.login: "Login" }</NavLink>
        </div>)
}

export default Login;