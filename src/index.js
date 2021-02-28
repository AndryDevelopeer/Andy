import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import  store from "./redux/state"
import s from "./index.css"

let rerenderEntireTree =()=>{
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addPost={store.addPost.bind(store)}// zabindili store jestko privazali k store
                     addTextPost={store.addTextPost.bind(store)}/>{/*отправляем аргумент с обьектом внутри в компоненту*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')

    );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);

