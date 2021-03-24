import React from "react"
import s from "./Profile.module.css"
import MyBlogContainer from "./MyBlog/MyBlogContainer";
import {NavLink} from "react-router-dom";
/*import action creator*/


const Profile = (props) => {
debugger
    return (<div className={s.Profile}>
            <div className={s.Profile_header_img}>
                <img src={props.highAva} alt=""/>
               {/* <img src="https://json.tv/public/images/general/2016/04/12/20160412234606-7129.jpg" alt=""/>*/}
            </div>
            <div className={s.Ava}>
                <img src={props.ava} alt=""/>
             {/*   <img
                    src="https://sun9-11.userapi.com/impg/c857520/v857520414/22b51a/ns5muUS5s6s.jpg?size=1280x1280&quality=96&sign=1f2a1428c7321f27264dc84529a1da4f&type=album"
                    alt=""/>*/}
            </div>
            <div className={s.About}>
                <div className={s.Name}>

                    <div className={s.Name_User}>{props.fullName}</div>
                    <div className={s.Name_Prof}>{props.aboutMe}</div>
                    <div className={s.Name_Sity}>Russia Chelyabinsk City</div>
                    <div className={s.Name_Activ}>
                        <NavLink to={"message"}> <button className={s.Name_Message}> Message</button> </NavLink>
                        <button className={s.Name_Add} onClick={() => {
                            alert("Нельзя добавить себя в друзья")
                        }}> +
                        </button>
                    </div>

                </div>
                <div className={s.Exp}>
                    <div className={s.Exp.Work}><span>Work in: </span> LD Company</div>
                    <div className={s.Exp.Work}><span>Job responsibilities: </span>
                        Factory automation
                    </div>
                    <div className={s.Exp.School}><span>High school: </span>
                        Chelyabinsk College of Industrial Automation CCIA
                    </div>
                </div>
            </div>

            <MyBlogContainer/>{/*posts={props.posts} dispatch={props.dispatch}*/}
            {/*отпраляем полученный пропс в компаненту*/}
        </div>
    )
}
export default Profile;