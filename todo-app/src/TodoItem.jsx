import React from "react";

/*
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked : props.isChecked
        }
    }

    render() {
        return (
            <div className="todo-item"
                onClick={this.handleClick}
            >
                {this.state.isChecked ? "⬜": "✅"}
                {this.props.title}
            </div>
        )
    }
}
*/

/*
    데이터 처리를 TodoList 컴포넌트로 보내고
    TodoItem 은 표현만 하는 Container - Presentational 관계로 바꿈
*/
const TodoItem = function(props) {

    function deleteClick(event) {
        event.stopPropagation();
        if (window.confirm("삭제하면 복구하실 수 없습니다. 정말로 삭제하시겠습니까?"))
        {
            props.deleteTodo(props.index);
        }
        alert(props.index);
    }
    return (
    <div className="item" onClick={e => props.handleClick(props.index)}>
        {props.isChecked ? "✅": "⬜"}
        {props.title}
        <span className="delete" onClick={deleteClick}>삭제</span>
    </div>
    )
}



export default TodoItem;