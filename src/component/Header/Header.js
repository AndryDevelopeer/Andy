import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = () => {

    let friendYourself=()=>{
        (alert("2021 год"))
    }

    return (<div className={s.Header}>
            <div className={s.Header_search}>
                <div className={s.Header_search_img}>
                    <span className={s.span} onClick={friendYourself}> TWENTY TWO</span>
                </div>

            </div>
            <div className={s.Header_nav}>
                <div className={s.Header_nav_item}><NavLink to="/myProfile" activeClassName={"s.activeLink"}>My profile</NavLink></div>
                <div className={s.Header_nav_item}><NavLink to="/message" activeClassName={"s.activeLink"}>Message</NavLink></div>
                <div className={s.Header_nav_item}><NavLink to="/myFriends" activeClassName={"s.activeLink"}>My friends</NavLink></div>
                <div className={s.Header_nav_item}><NavLink to="" activeClassName={"s.activeLink"}>News</NavLink></div>
                <div className={s.Header_nav_item}><NavLink to="" activeClassName={"s.activeLink"}>Search</NavLink></div>
                <button className={s.Header_more_button}>
                    <div className={s.Header_more_button_dot}> s</div>
                    <div className={s.Header_more_button_dot}>s</div>
                    <div className={s.Header_more_button_dot}> s</div>
                </button>

            </div>

        </div>
    );

}
export default Header;