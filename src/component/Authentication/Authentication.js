import React from "react"
import s from "./Authentication.module.css"

let Authentication =(props)=>{
    return(
        <div className={s.login}>
            <div className={s.form}>
                <form>
                    Login <br/> <input type="text" /> <br/>
                    Password <br/><input type="password"/>
                    <input type="submit" value="Войти"/>
                </form>
            </div>
            <br/>
            <div className={s.sing}>
                <a href="">sing in</a>   <a href="">sing up</a>
            </div>


        </div>
    )

}

export default Authentication