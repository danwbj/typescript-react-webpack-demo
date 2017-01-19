import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from 'react-router';

import { Hello } from "./components/Hello";
import communityRouter from './modules/community/router'

let router = (
    <Router history={hashHistory}>
        {communityRouter}
    </Router>
)
ReactDOM.render(router, document.getElementById("example"));