import React from "react";
import TodoItem from "./TodoItem.jsx";

/*
const TodoList = function(props) {
    return (
        <div>
            <TodoItem title="로또 사기" isChecked="false" />
            <TodoItem title="당첨 되기" isChecked="false" />
            <TodoItem title="건물 사기" isChecked="false" />
        </div>
    )
}
*/


/*
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {title: "로또 사기", isChecked: false},
                {title: "리액트 공부 하기", isChecked: false},
                {title: "취업 하기", isChecked: false}
            ]
        }
        this.handleClick = (this.handleClick).bind(this);
    }

    handleClick(index) {
        const oldList = this.state.list;
        let newList = [];
        for (let i=0; i < oldList.length; i++) {
            let item = oldList[i]
            if (i===index) item.isChecked = !item.isChecked;
            newList.push(item);
        }
        this.setState({list: newList});
    }


    // render() {
    //     return (
    //         <div>
    //             <TodoItem handleClick={this.handleClick} title={this.state.list[0].title} isChecked={this.state.list[0].isChecked} />
    //             <TodoItem handleClick={this.handleClick} title={this.state.list[1].title} isChecked={this.state.list[1].isChecked} />
    //             <TodoItem handleClick={this.handleClick} title={this.state.list[2].title} isChecked={this.state.list[2].isChecked} />
    //         </div>
    //     )
    // }


    // map 사용해서 반복 구현하기
    render() {
        const list2MapRender = this.state.list.map( (item, index) =>
            <TodoItem
                key={index} // key 속성 설정을 해주면 효율적으로 요소를 재활용할 수 있다!
                handleClick={this.handleClick}
                index={index}
                title={item.title}
                isChecked={item.isChecked}
            ></TodoItem>
        );
        return (
            <div>{ list2MapRender }</div>
        )
    }
}
*/

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        // let todolist = localStorage.getItem("todolist");
        let todolist = localStorage.getItem(this.props.prefix+"todolist"); 
        if (todolist) {
            todolist = JSON.parse(todolist);
        } else {
            todolist = [];
        }
        this.setState({ list: todolist })
    }

    
    handleClick(index) {
        const oldList = this.state.list;
        let newList = [];
        for (let i=0; i < oldList.length; i++) {
            let item = oldList[i]
            if (i===index) item.isChecked = !item.isChecked;
            newList.push(item);
        }
        // localStorage.setItem("todolist", JSON.stringify(newList));
        localStorage.setItem(this.props.prefix+"todolist", JSON.stringify(newList)); // 수정

        this.setState({list: newList});
    }

    deleteTodo(index) {
        const oldList = this.state.list;
        let newList = [];
        for (let i=0; i < oldList.length; i++) {
            let item = oldList[i]
            if (i===index) continue;
            newList.push(item);
        }
        // localStorage.setItem("todolist", JSON.stringify(newList));
        localStorage.setItem(this.props.prefix+"todolist", JSON.stringify(newList)); // 수정

        this.setState({list: newList});
    }

    render() {
        const list2MapRender = this.state.list.map( (item, index) =>
            <TodoItem
                key={index} // key 속성 설정을 해주면 효율적으로 요소를 재활용할 수 있다!
                handleClick={this.handleClick}
                deleteTodo={this.deleteTodo}
                index={index}
                title={item.title}
                isChecked={item.isChecked}
            ></TodoItem>
        );
        return (
            <div>{ list2MapRender }</div>
        )
    }
}

export default TodoList;