import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import  store from "./redux/state"
import s from "./index.css"
import {addNewMessage} from "./redux/state"

let rerenderEntireTree =()=>{

    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>{/*отслеживает клики дороги*/ }
                                <App state={store.getState()} addNewMessage={addNewMessage}
                                     dispatch={store.dispatch.bind(store)}// zabindili store, hardcode with store
                   />{/*отправляем аргумент с обьектом внутри в компоненту*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')

    );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);

