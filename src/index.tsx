import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {queryParams} from "./util/helpers";

const ELEMENT_ID = "root";

ReactDOM.render(<App queryParams={queryParams}/>, document.getElementById(ELEMENT_ID));
