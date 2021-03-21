import React from "react";
import s from "./Search.module.css"
import * as axios from "axios";
import userPhoto from "../img/user.png"

class Search extends React.Component {//создаем класс сеарч родительский классс реакт компоненд
    componentDidMount() {//метод конструктора
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {//запрос на сервер
            this.props.setUsers(response.data.items);//ответ передаем в сетюзерс
        });
    }
    render() {//рендер компоненты
        return (
            <div>
                <h3 className={s.users_h3}>Users</h3>
                <div>{this.props.users.map(u =>
                    <div className={s.users} key={u.id}>
                        <div className={s.users_img}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div> {/*ставим маленькое фото если оно не равно нули, иначе берем юзерФото*/}
                        <div className={s.users_action}>
                            {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>-</button>
                                : <button onClick={() => this.props.follow(u.id)}>+</button>}
                            <button>m</button>
                        </div>
                        <div className={s.users_item}>
                            <div className={s.users_name}>{u.name}</div>
                            <div className={s.users_years}>id: {u.id}</div>
                        </div>
                        <div className={s.users_location}>
                            <div className={s.users_town}> {u.town} Russia</div>
                            <div className={s.users_about}>{u.work}</div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Search;