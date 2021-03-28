import React from "react"
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setInProcess,
    setTotalUsers,
    setUsers,
    unfollow,
} from "../../redux/searchReducer";
import Search from "./Search";
import preloader from "../img/Spinner-1s-40px.svg";
import {usersAPI} from "../../api/api";
class SearchAPI extends React.Component {//создаем класс сеарч родительский классс реакт компоненд
    componentDidMount() {//метод конструктора
        this.props.setInProcess(true)//спинер загрузки
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {//запрос на сервер через апи компоненту
            this.props.setInProcess(false)//спинер загрузки выкл
            this.props.setUsers(data.items);//ответ передаем в сетюзерс
            this.props.setTotalUsers(data.totalCount);//ответ передаем в сетюзерс
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setInProcess(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {//запрос на сервер через апи компоненту
            this.props.setInProcess(false)
            this.props.setUsers(data.items);//ответ передаем в сетюзерс
        });
    }

    render() {
        return <>
            <Search
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    inProcces={this.props.inProcess ? <img src={preloader} alt=""/> : null}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.searchPage.users,
        pageSize: state.searchPage.pageSize,
        totalUsersCount: state.searchPage.totalUsersCount,
        currentPage: state.searchPage.currentPage,
        inProcess: state.searchPage.inProcess
    }
}
const SearchContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    setInProcess
})(SearchAPI);
export default SearchContainer