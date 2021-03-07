import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore"
import s from "./index.css"


let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter className={s.rout}>{/*отслеживает клики дороги*/}
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}  // забиндили сторе,(жесток захардкодили)
                />{/*отправляем аргумент с обьектом внутри в компоненту*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);

