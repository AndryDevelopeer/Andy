import {connect} from "react-redux";
import Notification from "./Notification";
import {NavLink} from "react-router-dom";
import s from "./Notification.module.css";

const mapStateToProps=(state)=>{
    return{
        newsFriends:state.myFriendsArray.map(n =>
            <NavLink to=" " key={n.id}>
                <div className={s.News}>
                    <div className={s.News_item}>
                        <div className={s.News_item_User}>
                            <div className={s.News_item_object}><img src={n.ava} alt=""/></div>
                            <div className={s.News_item_object_name}> {n.name} </div>
                        </div>
                        <div className={s.News_item_do}> {n.do} </div>
                    </div>
                </div>
            </NavLink>
        )
    }
}
const NotificationContainer=connect(mapStateToProps)(Notification);
export default NotificationContainer;