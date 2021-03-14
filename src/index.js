import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore"
import s from "./index.css"
import {Provider} from "react-redux";


    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter className={s.rout}>{/*отслеживает клики дороги*/}
                <Provider store={store}>
                    <App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
                         store={store}// забиндили сторе,(жесток захардкодили)
                    />{/*отправляем аргумент с обьектом внутри в компоненту*/}
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );



