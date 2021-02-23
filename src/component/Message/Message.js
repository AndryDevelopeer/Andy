import React from "react"
import s from "./Message.module.css"
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Dialogs0 from "./Dialogs/0";
import Dialogs2 from "./Dialogs/1";
import Dialogs3 from "./Dialogs/2";
import Dialogs4 from "./Dialogs/3";
import Dialogs5 from "./Dialogs/4";
import Dialogs6 from "./Dialogs/5";


const Messages = (props) => {

    let dialogsElements = props.friends.map(d =>
        <NavLink to={d.id}>
        <div className={s.item}>
            <div className={s.ava}><img src={d.ava} alt=""/></div>
           <div className={s.name}>
               <div>{d.name}</div>
               <div>{d.unread}</div>
           </div>
        </div>
        </NavLink>)

    return (<BrowserRouter>

            <div className={s.content}>

                <div className={s.contact}>
                    <div>{dialogsElements}</div>
                    <h3>Message</h3>
                </div>

                {<div className={s.dialogs}>
                    <Route path={"/0"} component={Dialogs0}/>
                    <Route path={"/1"} component={Dialogs2}/>
                    <Route path={"/2"} component={Dialogs3}/>
                    <Route path={"/3"} component={Dialogs4}/>
                    <Route path={"/4"} component={Dialogs5}/>
                    <Route path={"/5"} component={Dialogs6}/>
                    <div className={s.messageArea}>
                        <input type="text" className={s.input}/>
                        <input type="button" className={s.button}/>
                    </div>

                </div>}

            </div>
        </BrowserRouter>
    )
}


export default Messages;

