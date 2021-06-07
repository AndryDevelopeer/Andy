import {usersAPI} from "../api/api";

const SET_LOGIN = "SET_LOGIN";
const SET_NAME = "SET_NAME";
const SET_ID = "SET_ID";
const SET_MAIL = "SET_MAIL";
let initialState = {
    id: null,
    login: "",
    email: "",
    messages: 0,
    resultCode: 1,
    inProcess:false,
    isAuth:false
};
const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOGIN: {
            let stateCopy = {...state}
            stateCopy.resultCode = {...state.resultCode}
            stateCopy.resultCode = action.data;
            return stateCopy;
        }
        case SET_NAME: {
            let stateCopy = {...state}
            stateCopy.login = {...state.login}
            stateCopy.login = action.login;
            return stateCopy;
        }
        case SET_ID: {
            let stateCopy = {...state}
            stateCopy.id = {...state.id}
            stateCopy.id = action.id;
            stateCopy.isAuth=true
            return stateCopy;
        }
        case SET_MAIL: {
            let stateCopy = {...state}
            stateCopy.email = {...state.email}
            stateCopy.email = action.email;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const setLogin = (data) => ({type: SET_LOGIN, data});
export const setName = (login) => ({type: SET_NAME, login});
export const setId = (id) => ({type: SET_ID, id});
export const setMail = (email) => ({type: SET_MAIL, email});

export const setLoginThunkCreator = ()=>{
    return(dispatch)=>{
        usersAPI.auth()//вызываем сушность из юзерапи с именем ауф
            .then(response => {
                if(response.data.resultCode===0) {//если код ошибки ответа равен 0 тогда
                    dispatch(setLogin(response.data.resultCode))
                    dispatch(setName(response.data.data.login))
                    dispatch(setId(response.data.data.id))
                    dispatch(setMail(response.data.data.email))
                    console.log(response.data)
                }
            })
    }
}
export default loginReducer;