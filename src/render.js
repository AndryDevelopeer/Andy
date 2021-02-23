import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost} from "./redux/state";

export let renderDom=(state)=>{
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>{/*отправляем аргумент с обьектом внутри в компоненту*/}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')

    );
}