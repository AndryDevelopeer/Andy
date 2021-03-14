import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import s from "./MyFriends.module.css";
import MyFriends from "./MyFriends";


const mapStateToProps=(state)=>{
debugger
    return{
        friend:state.myFriendsArray.map(f =>
            <NavLink to={"myFriends"}>
                <div className={s.itemDialog}>
                    <div className={s.itemFriends}>
                        <div className={s.itemDialogAva}>
                            <img src={f.ava} alt=""/>
                        </div>
                        <div className={s.itemDialogName}>{f.name}</div>
                        <div className={s.message}>{f.unread}</div>
                        <div className={s.message}>{f.work}</div>
                        <div className={s.message}>{f.years} </div>
                    </div>
                    <div className={s.about}>{f.about}</div>
                </div>
            </NavLink>)
    }
}

const MyFriendsContainer=connect(mapStateToProps)(MyFriends);
export default MyFriendsContainer;