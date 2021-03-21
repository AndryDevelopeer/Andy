import React from "react";
import s from "./Search.module.css"
import * as axios from "axios";
import userPhoto from "../img/user.png"

class Search extends React.Component {//создаем класс сеарч родительский классс реакт компоненд
    componentDidMount() {//метод конструктора

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {//запрос на сервер
            this.props.setUsers(response.data.items);//ответ передаем в сетюзерс
            this.props.totalUsers(response.data.totalCount);//ответ передаем в сетюзерс
        });
    }
onPageChanged=(pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {//запрос на сервер
            this.props.setUsers(response.data.items);//ответ передаем в сетюзерс
        });
}
    render() {//рендер компоненты
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        //счетчик страниц равен количество юзеров деленое на количество юзеров на странице
        let pages = [];
        // создаем массив для вывода количества страниц
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }//пушим количество страниц в массив

        return (
            <div>
                <div><h3 className={s.users_h3}>Users </h3>
                    <div className={s.users_h3}>
                        {pages.map(p => {//перебираем массив и выводим нумерацию страниц
                            return <span onClick={(e)=>{this.onPageChanged(p)}}
                            //вызываем функцию через анонимную функцию иначе все зациклиться
                                         className={this.props.currentPage === p && s.selectedPage}> {p} </span>
                            //если выбранная страница равна р тогда класнэйм селкт пэйдж
                        })}
                    </div>
                </div>
                <div>{this.props.users.map(u =>
                    <div className={s.users} key={u.id}>
                        <div className={s.users_img}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        {/*ставим маленькое фото если оно не равно нули, иначе берем юзерФото*/}
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