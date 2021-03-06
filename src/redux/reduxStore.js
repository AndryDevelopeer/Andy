import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import myFriendReducer from "./myFriendReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    myFriendsArray: myFriendReducer
})

let store = createStore(reducers);

export default store;