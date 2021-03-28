import React from "react"
import Login from "./Login";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setInProcess} from "../../redux/profileReducer";
import {setId, setLogin, setMail, setName} from "../../redux/loginReducer";

class LoginAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode===0) {
                    this.props.setLogin(response.data.resultCode)
                    this.props.setName(response.data.data.login)
                    this.props.setId(response.data.data.id)
                    this.props.setMail(response.data.data.email)
                    console.log(response.data)
                }
            })
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
let LoginContainer = connect(mapStateToProps, {setInProcess, setLogin, setName,setId,setMail})(LoginRout)
export default LoginContainer;
