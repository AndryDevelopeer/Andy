import React from "react";
import s from "./Search.module.css"
import userPhoto from "../img/user.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

let Search = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //счетчик страниц равен количество юзеров деленое на количество юзеров на странице
    let pages = [];
    // создаем массив для вывода количества страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }//пушим количество страниц в массив
    return (
        <div>
            <div><h3 className={s.users_h3}>Users </h3>{props.inProcces?props.inProcces:
                <div className={s.users_h3}>
                    {pages.map(p => {//перебираем массив и выводим нумерацию страниц
                        return <span onClick={(e) => {
                            props.onPageChanged(p)
                        }} //вызываем функцию через анонимную функцию иначе все зациклиться
                                     className={props.currentPage === p && s.selectedPage}> {p} </span>
                        //если выбранная страница равна р тогда класнэйм селкт пэйдж
                    })}
                </div>}
            </div>
            <div>{props.users.map(u =>
                <div className={s.users} key={u.id}>
                    <div className={s.users_img}>
                       <NavLink to={"myProfile/"+u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></NavLink>
                    </div>
                    {/*ставим маленькое фото если оно не равно нули, иначе берем юзерФото*/}
                    <div className={s.users_action}>
                        {u.followed
                            ? <button onClick={()=> {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY":"50a7c2e1-8db0-4c7f-b525-d74d2c255159"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>-</button>
                                :<button onClick={()=>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                        withCredentials: true,//от своего имени
                                        headers:{
                                            "API-KEY":"50a7c2e1-8db0-4c7f-b525-d74d2c255159"//ключ запроса
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode===0) {//если ответ 0 тогда
                                                props.follow(u.id)
                                            }
                                        });
                            }}>+</button>}
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


export default Search;