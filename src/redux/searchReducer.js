import {usersAPI} from "../api/api";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const SET_IN_PROCESS = "SET-IN-PROCESS";
const SET_FOLLOWING_IN_PROCESS = "SET_FOLLOWING_IN_PROCESS"
//редюсер это функция которая принимает стэйт и экшен и возвращает новый стэйт
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 40,
    currentPage: 1,
    inProcess: true,
    followingInProgress: false
};/*для первоночальной отрисовки стэйта, после этого стэйт отрисовавыеться при изменении*/

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USERS: {

            return {...state, users: action.users}//копистэйт, коп массива стэйт+копия массива акшен
        }
        case  SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}//копистэйт, коп массива стэйт+копия массива акшен
        }
        case  SET_TOTAL_USERS: {
            return {...state, totalUsersCount: action.totalUsersCount}//копистэйт, коп массива стэйт+копия массива акшен
        }
        case  SET_IN_PROCESS: {
            return {...state, inProcess: action.inProcess}//копистэйт, коп массива стэйт+копия массива акшен
        }
        case  SET_FOLLOWING_IN_PROCESS: {
            return {...state, followingInProgress: action.followingInProcess}//копистэйт, коп массива стэйт+копия массива акшен
        }
        case SHOW_MORE: {
            let stateCopy = {...state};//делаем поверностную копию обьекта
            stateCopy.newPostText = {...state.newPostText}//делаем глубокую копию обьекта
            stateCopy.newPostText = action.text;/*меняем текс при изменении в поле инпут*/
            return stateCopy;//возвращаем копию
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {//делаем копию стейта, копию массива
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {//делаем копию стейта, копию массива
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        default: {
            return state
        }
    }
}
/*создание экшенов для диспатча*/
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsers = (totalUsersCount) => ({type: SET_TOTAL_USERS, totalUsersCount});
export const setInProcess = (inProcess) => ({type: SET_IN_PROCESS, inProcess});
export const setFollowingInProgress = (followingInProcess) => ({type: SET_FOLLOWING_IN_PROCESS, followingInProcess});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
/*если функция только возвращает значение ее можно записать так*/


export const getUsersThunkCreator = (currentPage,pageSize) => {//санка для получения узеров
    return (dispatch) => {// внутри санки диспатч
       dispatch(setInProcess(true));//спинер загрузки
        usersAPI.getUsers(currentPage,pageSize).then(data => {//запрос на сервер через апи компоненту
            dispatch (setInProcess(false))//спинер загрузки выкл
            dispatch (setUsers(data.items));//ответ передаем в сетюзерс
            dispatch (setTotalUsers(data.totalCount));//ответ передаем в сетюзерс
            dispatch (setCurrentPage(currentPage));//ответ передаем в сетюзерс
        });
    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true))
        usersAPI.follow(userId)
            .then(response => {
                dispatch(setFollowingInProgress(false))
                if (response.data.resultCode === 0) {//если ответ 0 тогда
                    dispatch(follow(userId))
                }
            });
    }
}
export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true))
        usersAPI.unfollow(userId)
            .then(response => {
                dispatch(setFollowingInProgress(false))
                if (response.data.resultCode === 0) {//если ответ 0 тогда
                    dispatch(unfollow(userId))
                }
            });
    }
}
export default searchReducer;