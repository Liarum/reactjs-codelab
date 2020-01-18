import React from "react";
import TodoList from "./TodoList";
import TodoWrite from "./TodoWrite";

/*
const TodoApp = function(props) {
    return (
        <div>
            <h1>To do List</h1>
            <TodoList />
        </div>
    )
}
*/


const TodoApp = function(props) {
    let [mode, setMode] = React.useState("list");

    let ifComponent = <TodoList />;
    if (mode === "write") ifComponent = <TodoWrite />;

    function getMenuClassName(select) {
        return "btn " + (mode === select ? "select" : "")
    }

    return (
        <div className="todo-app">
            <div className="todo-header">
                <h1>To Do List</h1>
                <span className={getMenuClassName("list")} onClick={e => setMode("list" )}>목록</span>
                <span className={getMenuClassName("write")} onClick={e => setMode("write" )}>새 목록 추가</span>
            </div>
            <div className="todo-main">
                { ifComponent }
            </div>
        </div>
    )
}



// 컴포넌트 확장
TodoApp.defaultProps = {
    name: "",
    prefix: "",
}

export default TodoApp;