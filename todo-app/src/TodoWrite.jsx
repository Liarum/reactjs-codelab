import React from "react";

class TodoWrite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.writeTodo = (this.writeTodo).bind(this);
        this.handleChange = (this.handleChange).bind(this);
    }

    handleChange(e) {
        this.setState( {[e.target.name] : e.target.value})
    }
    
    writeTodo() {
        const title = this.state.title;
        //유효성 검사
        if (title.length < 1) {
            alert("할일을 입력해주세요!")
            return;
        }

        // 기존 데이터 읽어오기
        // let todolist = localStorage.getItem("todolist");
        
        let todolist = localStorage.getItem(this.props.prefix+"todolist"); // 수정

        if (todolist) {
            todolist = JSON.parse(todolist);
        } else {
            todolist = [];
        }
        
        // 새로 추가하기
        const newTodo = {title: title, isChecked: false};
        todolist.push(newTodo);

        //db에 저장하기
        todolist = JSON.stringify(todolist);
        // localStorage.setItem("todolist", todolist);
        localStorage.setItem(this.props.prefix+"todolist", todolist); // 수정

        //입력창 초기화하기
        this.setState({title: ""});
    }
    render() {
        return (
            <div>
                <p>
                    제목 <input type="text" name="title"
                                value={this.state.title} onChange={this.handleChange} />
                </p>
                <button onClick={this.writeTodo}>등록하기</button>
            </div>
        );
    }
}

export default TodoWrite;