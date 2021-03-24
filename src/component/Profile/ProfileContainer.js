import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAboutMe, setAva, setHeaderAva, setUserName} from "../../redux/profileReducer";


class ProfileAPI extends React.Component {
    componentDidMount() {
        debugger
        /*this.props.profailInfo.setInProcess(true)*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11`)
            .then(response => {//запрос на сервер
                debugger
                // this.props.profailInfo.setInProcess(false)
                this.props.setUserName(response.data.fullName)
                this.props.setAboutMe(response.data.aboutMe)//ответ передаем в сетюзерс
                this.props.setAva(response.data.photos.small)//ответ передаем в сетюзерс
                this.props.setHeaderAva(response.data.photos.large)//ответ передаем в сетюзерс

            });
    }

    render() {
        return(<Profile {...this.props}/>)
    }

}
const mapStateToProps = (state)=>{

    return{
        aboutMe:state.profilePage.aboutMe,
        fullName:state.profilePage.name,
        ava:state.profilePage.ava,
        highAva:state.profilePage.highAva
    }
}
const ProfileContainer = connect (mapStateToProps,{setAboutMe,setUserName,setAva,setHeaderAva})(ProfileAPI)
export default ProfileContainer;