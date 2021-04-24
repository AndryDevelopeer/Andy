import React from "react"
import Login from "./Login";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setInProcess} from "../../redux/profileReducer";
import {setId, setLogin, setLoginThunkCreator, setMail, setName} from "../../redux/loginReducer";

class LoginAPI extends React.Component {
    componentDidMount() {
       this.props.setLoginThunkCreator()
    }
    render() {
        return (<Login {...this.props}/>)
    }
}
let mapStateToProps = (state) => {
    return {
        resultCode: state.login.resultCode,
        login: state.login.login,
        isAuth: state.login.isAuth

    };
}
let LoginRout = withRouter(LoginAPI)/*спомощью визроутера достаем параметры урла и передаем в АПИ*/
let LoginContainer = connect(mapStateToProps, {
    setInProcess, setLogin, setName,
    setId,setMail,setLoginThunkCreator})(LoginRout)
export default LoginContainer;
