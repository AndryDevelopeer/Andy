//import logo from './svg.png';
import React from 'react'; /* импорт библиотеки реакт для
 синтаксиса JSX */
import './App.css';
import Header from "./component/Header";
import NavContent from "./component/NavContent";

// импорт стиля css


const App = () => {
    return (
        <div className="App">
            <Header/>
            <NavContent/>
        </div>);
}


export default App;