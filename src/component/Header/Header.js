import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";


const Header = () => {

    let friendYourself = () => {
        (alert("2021 год"))
    }

    return (<div className={s.Header}>
            <div className={s.Header_nav}>
                {/* <div className={s.Header_nav_item}><NavLink to="/myProfile"
                                                            activeClassName={"s.activeLink"}>Profile</NavLink></div>*/}
                <div className={s.Header_nav_item}><NavLink to="/message"
                                                            activeClassName={"s.activeLink"}>Message</NavLink></div>
                <div className={s.Header_nav_item}><NavLink to="/myFriends"
                                                            activeClassName={"s.activeLink"}>Friends</NavLink></div>
                <div className={s.Header_nav_item}><NavLink to="/search"
                                                            activeClassName={"s.activeLink"}>Search</NavLink></div>
                <LoginContainer/>
            </div>
            <div className={s.Header_search}>
                <div>
                    <span className={s.span} onClick={friendYourself}> TWENTY TWO</span>
                </div>
            </div>
        </div>
    );

}
export default Header;