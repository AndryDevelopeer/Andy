import React from "react"
import {connect} from "react-redux";
import Search from "./Search";
import {
    followFriendsAC,
    setCurrentPageAC,
    setUsersAC,
    totalUsersCountAC,
    unfollowFriendsAC
} from "../../redux/searchReducer";

const mapStateToProps = (state) => {

    return {
        users: state.searchPage.users,
        pageSize: state.searchPage.pageSize,
        totalUsersCount: state.searchPage.totalUsersCount,
        currentPage: state.searchPage.currentPage

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followFriendsAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowFriendsAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        totalUsers:(totalCount)=>{
            dispatch(totalUsersCountAC(totalCount))
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer