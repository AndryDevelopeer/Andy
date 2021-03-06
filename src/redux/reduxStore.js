import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import myFriendReducer from "./myFriendReducer";
import notificationReducer from "./notificationReducer";

let reducers = combineReducers({/*объеденяем редюссеры это функция принимающая стэйт и экшен
и возвращающая измененный стэйт*/
    profilePage: profileReducer,/*для свойства стора значением будет этот редюсер*/
    dialogsPage: dialogsReducer,
    myFriendsArray: myFriendReducer,
    notification: notificationReducer
})

let store = createStore(reducers);/*создаем стор и передаем в него редюссеры*/
window.store = store;/*global*/
export default store;