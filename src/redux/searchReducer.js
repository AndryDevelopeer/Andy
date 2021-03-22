const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const SET_IN_PROCESS = "SET-IN-PROCESS"
//редюсер это функция которая принимает стэйт и экшен и возвращает новый стэйт
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 40,
    currentPage: 1,
    inProcess: true

};/*для первоночальной отрисовки стэйта, после этого стэйт отрисовавыеться при изменении*/
debugger
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
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const totalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS, totalUsersCount});
export const inProcessAC = (inProcess) => ({type: SET_IN_PROCESS, inProcess});
export const followFriendsAC = (userId) => ({type: FOLLOW, userId});
export const unfollowFriendsAC = (userId) => ({type: UNFOLLOW, userId});
/*если функция только возвращает значение ее можно записать так*/
export const showMoreAC = () => ({type: SHOW_MORE});
/*если функция только возвращает значение ее можно записать так*/
export default searchReducer;