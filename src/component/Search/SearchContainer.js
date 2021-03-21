import React from "react"
import {connect} from "react-redux";
import Search from "./Search";

import {followFriendsAC, setUsersAC, unfollowFriendsAC} from "../../redux/searchReducer";

const mapStateToProps = (state) => {
    return {
        users: state.searchPage.users
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followFriendsAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowFriendsAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        }
    }
}
const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(Search);
export default SearchContainer