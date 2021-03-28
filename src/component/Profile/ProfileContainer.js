import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {
    setAboutMe,
    setAva, setContacts,
    setHeaderAva, setInProcess, setJobDescription,
    setLookingJob,
    setUserName
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import preloader from "../img/Spinner-1s-40px.svg";

class ProfileAPI extends React.Component {
    componentDidMount() {//метод жизненного цикла
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 15916
        }
        this.props.setInProcess(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId,{
            withCredentials:true
        })
            .then(response => {//запрос на сервер
                this.props.setInProcess(false)
                this.props.setUserName(response.data.fullName)
                this.props.setAboutMe(response.data.aboutMe)//ответ передаем в сетюзерс
                this.props.setAva(response.data.photos.small)//ответ передаем в сетюзерс
                this.props.setHeaderAva(response.data.photos.large)//ответ передаем в сетюзерс
                this.props.setJobDescription(response.data.lookingForAJobDescription)
                this.props.setLookingJob(response.data.lookingForAJob)
                this.props.setContacts(response.data.contacts.facebook)
            });
    }

    render() {
        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        aboutMe: state.profilePage.aboutMe,
        fullName: state.profilePage.name,
        ava: state.profilePage.ava,
        highAva: state.profilePage.highAva,
        jobDescription: state.profilePage.jobDescription,
        lookingJob: state.profilePage.lookingJod,
        contacts: state.profilePage.contacts,
        inProcess: state.profilePage.inProcess ? <img src={preloader} alt=""/> : null
    }
}
let ProfileRout = withRouter(ProfileAPI)/*спомощью визроутера достаем параметры урла и передаем в профилеАПИ*/
let ProfileContainer = connect(mapStateToProps, {
    setAboutMe, setUserName, setAva,
    setHeaderAva, setJobDescription, setLookingJob,
    setContacts, setInProcess
})(ProfileRout)
export default ProfileContainer;