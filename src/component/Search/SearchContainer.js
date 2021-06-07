import React from "react"
import {connect} from "react-redux";
import {
    follow, followThunkCreator,
    getUsersThunkCreator, setCurrentPage,
    unfollow, unFollowThunkCreator,
} from "../../redux/searchReducer";
import Search from "./Search";
import preloader from "../img/Spinner-1s-40px.svg";

class SearchAPI extends React.Component {//создаем класс сеарч родительский классс реакт компоненд
    componentDidMount() {//метод конструктора
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            <Search
                followThunkCreator={this.props.followThunkCreator}
                unFollowThunkCreator={this.props.unFollowThunkCreator}
                followingInProgress={this.props.followingInProgress}
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                inProcces={this.props.inProcess ? <img src={preloader} alt=""/> : null}/>
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        users: state.searchPage.users,
        pageSize: state.searchPage.pageSize,
        totalUsersCount: state.searchPage.totalUsersCount,
        currentPage: state.searchPage.currentPage,
        inProcess: state.searchPage.inProcess,
        followingInProgress: state.searchPage.followingInProgress
    }
}
const SearchContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator,
    followThunkCreator,
    unFollowThunkCreator
})(SearchAPI);
export default SearchContainer