import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderDom} from "./render";
import state from "./redux/state";


renderDom(state);
reportWebVitals();
