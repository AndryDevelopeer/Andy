import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import myFriendReducer from "./myFriendReducer";
import notificationReducer from "./notificationReducer";
import searchReducer from "./searchReducer";
import loginReducer from "./loginReducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({/*объеденяем редюссеры это функция принимающая стэйт и экшен
и возвращающая измененный стэйт*/
    profilePage: profileReducer,/*для свойства стора значением будет этот редюсер*/
    dialogsPage: dialogsReducer,
    myFriendsArray: myFriendReducer,
    notification: notificationReducer,
    searchPage:searchReducer,
    login:loginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));/*создаем стор и передаем в него редюссеры.
 принимаем промежуточные слои*/

window.store = store;/*global*/
export default store;