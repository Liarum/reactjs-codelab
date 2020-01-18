import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MyComponent from "./MyComponent.jsx";
import TodoList from './TodoList';
import TodoApp from './TodoApp'

const jsx_component = (
    <div>
        <MyComponent/>
        <MyComponent/>
        <MyComponent/>
    </div>
)

const todo_jsx = (
    <div>
        <h1>To do List</h1>
        <TodoList/>
    </div>
)

const todo_app = (
    <div>
        <TodoApp />
    </div>
)

const final_todo_app = (
    <div>
      <div className="clearfix">
            <div className="w50"><TodoApp name="오늘 " /></div>
            <div className="w50"><TodoApp name="내일 " prefix="day_" /></div>
        </div>
        <div className="clearfix">
            <div className="w50"><TodoApp name="이번주 " prefix="week_" /></div>
            <div className="w50"><TodoApp name="이번달 " prefix="month_" /></div>
        </div>  
    </div>
)

ReactDOM.render(final_todo_app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
