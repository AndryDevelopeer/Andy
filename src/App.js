import React from 'react'; /* импорт библиотеки реакт для синтаксиса JSX */
import s from "./App.module.css"//импорт таблицы стилей как обьект S
import Header from "./component/Header/Header";// импорт компоненты
import {Route} from 'react-router-dom';// импорт библиотеки отрисовки по url экспортировалось не поумолчанию
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import MyFriendsContainer from "./component/MyFriends/MyFriendsContainer";
import NotificationContainer from "./component/Notification/NotificationContainer";
import SearchContainer from "./component/Search/SearchContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import Authentication from "./component/Authentication/Authentication";
//импорт компоненты
const App = (props) => /* создаем компоненту которая возвращает разметку jsx*/ {
    return (
        <div className={s.screen}>
            <div className={s.App}>
                <Header/>{/*компонента*/}
                <div className={s.FirstPage}>
                    <div className={s.content}>
                        <Route path="/myProfile/:userId?"
                               render={() => <ProfileContainer/>}/>{/*рендирится нужная компонента по url адресу */}
                        <Route path="/message"
                               render={() => <DialogsContainer/>}/>{/*рендирится нужная компонента по url адресу */}
                        <Route path="/myFriends" render={() => <MyFriendsContainer/>}/>
                        <Route path="/search"
                               render={() => <SearchContainer/>}/>{/*рендирится компонента по url адресу */}
                               <Route path="/login"
                               render={() => <Authentication/>}/>{/*рендирится компонента по url адресу */}
                    </div>
                    <NotificationContainer/>
                </div>
            </div>
        </div>
    )
}
export default App;// експортируем компоненту