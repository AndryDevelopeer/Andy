import React from "react"
import s from "./Profile.module.css"
import MyBlogContainer from "./MyBlog/MyBlogContainer";
import {NavLink, Redirect} from "react-router-dom";
import userAva from "../img/user.png"
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    let lookingJob = props.lookingJob;
    if(props.isAuth===false) return <Redirect to={"/login"}/>
    return (<div className={s.Profile}>
            <div className={s.Profile_header_img}>
                {props.highAva ? <img src={props.highAva} alt=""/> :
                    <img src="https://json.tv/public/images/general/2016/04/12/20160412234606-7129.jpg" alt=""/>}
            </div>
            <div className={s.Ava}>
                {props.ava ? <img src={props.ava} alt=""/> : <img src={userAva} alt=""/>}
            </div>
            <div className={s.About}>
                <div className={s.Name}>
                    <div className={s.Name_User}>{props.fullName}{props.inProcess?<Preloader/>:null}</div>
                    <div className={s.Name_Prof}>{props.aboutMe}</div>
                    <div className={s.Name_Sity}>Planet: Earth</div>
                    <div className={s.Name_Activ}>
                        <NavLink to={"message"}>
                            <button className={s.Name_Message}> Message</button>
                        </NavLink>
                        <button className={s.Name_Add} onClick={() => {
                            alert("Нельзя добавить себя в друзья")
                        }}> + </button>
                    </div>
                </div>
                <div className={s.Exp}>
                    <div className={s.Exp.Work}><span>Looking for a job:
                    </span> {lookingJob ? "Open for new role" : "No"}</div>
                    <div className={s.Exp.Work}><span>Job Description: </span>{props.jobDescription}</div>
                    <div className={s.Exp.School}><span>Contacts: </span> <NavLink
                        to={"profile"}> {props.contacts} </NavLink></div>
                </div>
            </div>
            <MyBlogContainer/>
        </div>
    )
}
export default Profile;