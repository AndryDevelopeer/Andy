import React from 'react'; /* импорт библиотеки реакт для синтаксиса JSX */
import s from "./App.module.css"//импорт таблицы стилей как обьект S
import Header from "./component/Header/Header";// импорт компоненты
import Profile from "./component/Profile/Profile";//импорт компоненты
import {Route} from 'react-router-dom';// импорт библиотеки отрисовки по url экспортировалось не поумолчанию
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import MyFriendsContainer from "./component/MyFriends/MyFriendsContainer";
import NotificationContainer from "./component/Notification/NotificationContainer";
//импорт компоненты


const App = (props) => /* создаем компоненту которая возвращает разметку jsx*/ {

    return (
        <div className={s.screen}>
            <div className={s.App}>
                <Header/>{/*компонента*/}
                <div className={s.FirstPage}>
                    <div className={s.content}>
                        <Route path="/myProfile" render={() =><Profile/>}/>{/*рендирится нужная компонента по url адресу */}
                        <Route path="/message" render={() =><DialogsContainer/>}/>{/*рендирится нужная компонента по url адресу */}
                        <Route path="/myFriends" render={() =><MyFriendsContainer/>}/> {/*рендирится компонента по url адресу */}
                    </div>
                    <NotificationContainer/>
                </div>
            </div>
        </div>
    )
}

export default App;// експортируем компоненту