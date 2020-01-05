import React from 'react';
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
ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
