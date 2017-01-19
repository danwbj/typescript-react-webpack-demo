import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, hashHistory} from 'react-router';

import {Home} from "./views/Home";
import {List} from "./views/List";

let router = (
    <div>
        <Route path="/community/home" component={Home}/>
        <Route path="/community/list" component={List}/>
    </div>

)
export default router