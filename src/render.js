import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addPost} from "./redux/state";

export let renderDom=()=>{
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>{/*отправляем аргумент с обьектом внутри в компоненту*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')

    );
}