import React from "react"
import {connect} from "react-redux";
import Search from "./Search";
import s from "./Search.module.css"

const mapStateToProps = (state) => {
    return {
        users: state.searchPage.map(u =>
            <div className={s.users} key={u.id}>

                <dvi className={s.users_item}>
                    <div className={s.users_img}>
                        <img src={u.ava} alt=""/>
                    </div>

                </dvi>
                <dvi className={s.users_action}>

                    <button> + {u.followed}</button>
                    <button> m </button>
                </dvi>

                <dvi className={s.users_item}>
                    <div className={s.users_name}>{u.name}</div>
                    <div className={s.users_years}>{u.years}</div>

                </dvi>

                <dvi className={s.users_location}>
                    <div className={s.users_town}> {u.town}</div>
                    <div className={s.users_about}>{u.work}</div>
                </dvi>


            </div>
        )
    }
}
const SearchContainer = connect(mapStateToProps)(Search);
export default SearchContainer