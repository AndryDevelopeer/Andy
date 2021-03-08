import React from 'react'; /* импорт библиотеки реакт для синтаксиса JSX */
import s from "./App.module.css"//импорт таблицы стилей как обьект S
import Header from "./component/Header/Header";// импорт компоненты
import Profile from "./component/Profile/Profile";//импорт компоненты
import {Route} from 'react-router-dom';// импорт библиотеки отрисовки по url экспортировалось не поумолчанию
import Notification from "./component/Notification/Notification";//импорт компоненты
import MyFriends from "./component/MyFriends/MyFriends";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
//импорт компоненты


const App = (props) => /* создаем компоненту которая возвращает разметку jsx*/ {

    return (
        <div>
            <div className={s.App}>
                <Header/>{/*компонента*/}
                <div className={s.FirstPage}>
                    <div className={s.content}>
                        <Route path="/myProfile" render={() =>
                            <Profile store={props.store}/>}/>
                        <Route path="/message" render={() =>
                            <DialogsContainer store={props.store}/>}/>{/*рендирится нужная компонента по url адресу */}
                        <Route path="/myFriends" render={() =>
                            <MyFriends
                                friends={props.state.myFriendsArray}/>}/> {/*рендирится компонента по url адресу */}
                    </div>
                    <Notification friends={props.state.myFriendsArray}/>
                </div>
            </div>
        </div>
    )
}

export default App;// експортируем компоненту