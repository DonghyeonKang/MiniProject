/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';
import { data } from './data.json'; //데이터를 쓸 때는 어떻게 생겼는 지 알고 있어야 한다. 
import Child from "./Child";

// default export 할 때 내보낼 함수가 딱 하나 밖에 없을 때. 그래서 import 시 하나만 가져온다 가정하고 alias를 부여하는 것. 그럼 2,3개는? 
// jsx 리액트 문법 js 안에 html
// export default function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//       {data.students.map((student) => (
//         <Student 
//           key={student.id}
//           name={student.name}
//           age={student.age}
//           isGirlfriend={student.isGirlfriend}
//         />
//       ))}
//     </div>
//   );
// }
//        <Student key={student.id} {...student} /> // 이렇게 줄일 수 있음 react 전개구문

//export default App;

// JS 파일을 각각을 모듈이라고 한다. 다른 모듈에서 쓰고 싶으면 import, 쓰게 만들고 싶으면 export
// 컴포넌트 = HTML을 리턴하는 함수(in react)

// hook 은 use로 시작하는 함수. useState(), useEffect(), use---() 직접 만들 수 있다.
// 훅은 클래스 컴포넌트가 아니라 함수 컴포넌트 안에서 사용할 수 있다. 왜냐하면 해당 부분만 재 랜더링 해야하니까
export default function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <h1>App</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>button</button>
      <Child count={count} setCount={setCount}></Child>
    </div>
  );
}