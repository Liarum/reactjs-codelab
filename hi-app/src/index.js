import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
JSX Rule 1. 닫는 태그가 꼭 있어야 한다.
const jsx = (
    // jsx 에서 쓰이는 html 은 사실 xml 이다
    <div>문단 넘기기 <br/> 잘 되나요? </div>
);
*/

/* JSX Rule 2. 하나의 element 만 반환할 수 있다.
const jsx = (
    <div>1111
        <div>2222</div>
    </div>
        가장 상단에 div 로 감싸주거나, React.Fragment 로 감싸서 사용하면 된다(<></>로 쓰면 자동 인식 가능)
        <React.Fragment></React.Fragment/>
);
*/

// JSX Rule 3. 주석 작성 방법
{/* 이 안에 주석 작성하면 주석을 제거하고 DOM 에 렌더링 된다, 일반 js 주석으로도 작성 가능 */}
let now = new Date().toLocaleString();
let myEmail = "lar404@naver.com";

//1. JSX 문법
const jsx = (
    <div>
        <div title={myEmail}>
            현재 시간 : {now}
        </div>

        <div className="text-center">
            <h1>중앙 정렬</h1>
        </div>
    </div>
);

//2. 컴포넌트
const HelloComponent = function(props) {
    console.log(props)
    return <h1>안녕 ! {props.name}</h1>;
};

const jsxComponent = (
    <div>
        <HelloComponent name="컴포넌트"/>
        <HelloComponent name="리액트"/>
        <HelloComponent name="리액트 변수 타입" str="10" num={10} bool={false} obj={{a:10, b:20}} />
    </div>
)

//3. 클래스
class StatefulComponent extends React.Component {
    constructor (props) {
        super (props);
    }
    render() {
        return <h1> 안녕 {this.props.name} </h1>;
    }
}
const jsxClass = (
    <StatefulComponent name="클래스 컴포넌트" />
);

//4. 이벤트 예제
// function App(props) {
//     function print(e) {
//         console.log("클릭됨!", e);
//     }
//     return (
//         <button onClick={print}>
//             브라우저의 콘솔창을 확인하세요!
//         </button>
//     );
// }

// 화살표 함수 예제
function App2(props) {
    function print(param) {
        console.log(param + " 클릭됨 !");
    }

    return (
        <div>
            <button onClick={ e => print("버튼 1")}>버튼1</button>
            <button onClick={ e => print("버튼 2")}>버튼2</button>
            <button onClick={ e => print("버튼 3")}>버튼3</button>
        </div>
    )
}

// this 사용과 state
class CountApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    
    addCount(addValue) {
        this.setState({
            counter: this.state.counter + addValue
        });
    }

    render() {
        return (
            <div>
                <h1>카운트: {this.state.counter}</h1>
                <button onClick={ e=> this.addCount(1)}>증가</button>
                <button onClick={ e=> this.addCount(-1)}>감소</button>
            </div>
        )
    }
}

// form event (양방향 바인딩)
class Binding extends React.Component {
    constructor(props) {
        super(props);
        // state의 초기값 설정
        this.state = {
            value: ""
        };
        // event 의 set state method를 찾아서 쓰기 위해 bind()가 필요하다.
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    initValue(val) {
        this.setState({value: val})
    }

    render() {
        return (
            <div>
                <h1>출력: {this.state.value}</h1>
                <p>입력: <input type="text" value={this.state.value} onChange={this.handleChange} /></p>
                <button onClick={e=>this.initValue("")}>초기화</button>
            </div>
        )
    }
}

// 생명주기
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        console.log("constructor");
        debugger;
    }

    componentDidMount() {
        console.log("componentDidMount");
        debugger;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState);
        console.log("componentDidUpdate", this.props, this.state);
        debugger;
    }

    componentWillUnmount() {
        console.log("componentDidmount");
        debugger;
    }
    
    addCount(addValue) {
        this.setState({
            counter: this.state.counter + addValue
        });
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>카운트: {this.state.counter}</h1>
                <button onClick={ e=> this.addCount(1)}>증가</button>
                <button onClick={ e=> this.addCount(-1)}>감소</button>
            </div>
        )
    }

}

// 함수형 컴포넌트
function CountApp2() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>카운트: {counter}</h1>
            <button onClick={e => setCounter(counter + 1)}>증가</button>
            <button onClick={e => setCounter(counter - 1)}>감소</button>
        </div>
    )
}


const jsxApp = (
    // <App2 />
    //<CountApp />
    // <Binding />
    // <LifeCycle />
    <CountApp2 />
)
ReactDOM.render(jsxApp, document.getElementById('root'));

serviceWorker.unregister();
