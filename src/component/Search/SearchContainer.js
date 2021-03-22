import React from "react"
import {connect} from "react-redux";
import {
    followFriendsAC, inProcessAC,
    setCurrentPageAC,
    setUsersAC,
    totalUsersCountAC,
    unfollowFriendsAC
} from "../../redux/searchReducer";
import * as axios from "axios";
import Search from "./Search";
import preloader from "../img/Spinner-1s-40px.svg";

class SearchAPI extends React.Component {//создаем класс сеарч родительский классс реакт компоненд
    componentDidMount() {//метод конструктора
        this.props.setInProcess(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {//запрос на сервер
                this.props.setInProcess(false)
                this.props.setUsers(response.data.items);//ответ передаем в сетюзерс
                this.props.totalUsers(response.data.totalCount);//ответ передаем в сетюзерс
            });
    }
    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.setInProcess(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {//запрос на сервер
                this.props.setInProcess(false)
                this.props.setUsers(response.data.items);//ответ передаем в сетюзерс
            });
    }
    render() {
        return<>
            <Search totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize }
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    inProcces={this.props.inProcess ? <img src={preloader} alt=""/>:null}/>
        </>
    }
}
const mapStateToProps = (state) => {

    return {
        users: state.searchPage.users,
        pageSize: state.searchPage.pageSize,
        totalUsersCount: state.searchPage.totalUsersCount,
        currentPage: state.searchPage.currentPage,
        inProcess:state.searchPage.inProcess

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
        },
        setInProcess:(inProcess)=>{
            dispatch(inProcessAC(inProcess))
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPI);
export default SearchContainer