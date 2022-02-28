import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 백틱과 변수 사용
  const name = '조교행님';
  const age = 28;
  console.log(name + '은 ' + age + '살이다. ');
  console.log(`${name}은 ${age} 살이다.`);
  // array const 로 정의하면 재정의 불가 but 인덱스 변경 가능
  
  // 배열은 대괄호, 객체는 중괄호, key-value 는 프로퍼티
  // myInfo라는 객체를 만든 것
  const myInfo = {
    name: '조교행님',
    age: 28, 
    familyMenbers: ['아빠', '엄마', '멍뭉이']
  }
  console.log(myInfo.name);
  myInfo.name = '윤수';  
  console.log(myInfo.name);
  // object length
  console.log(Object.keys(myInfo).length);
  // 배열 복사 x, y, z 는 Number이고, other 은 object 로 나온다 
  const data = [2, 3, 1, 4, 5];
  const [x, y, z, ...other] = data;
  console.log(`${x} ${y} ${z} ${other}`);
  
  function sayHello(name: String, age:Number) {
    console.log(`${name} 는 ${age}살이다. `);
  }
  sayHello('윤수 나와라', 24);

  // 배열과 객체를 함수의 파라미터로 받아 함수 내에서 바꾸면 바깥에서도 바뀐다. call by ref?
  const menu = ['윤수', '수정', '정윤']; 

  function showResult (menu: String[]) {
    menu[0] = '정정';
    return menu;
  }
  console.log(menu);
  // 함수를 파라미터로 넘겨줄 때는 Interface 선언
  interface Info {
    name: string, // 대소문자 구분 없나? 
    age: number
  }
  const info = {
    name: '싯팔',
    age: 18
  }

  function showResultt(info: Info) {
    info.age = 28;
    info.name = '이싯팔';
    return info;
  }
  console.log(info);
  
  // 화살표 함수
  const sayHelloo = (name: string, age: number) => `${name}는 ${age}살 이다. `;
  const sayHellooo = (name: string, age: number) => {`${name}는 ${age}살 이다. `;}

  // for 대신 쓸 수 있는 map filter reduce()
  // map 배열을 반복해서 새 배열을 만들 때
  // filter 반복하면서 조건에 맞는 것만 새로운 배열로 반환
  const students = ['운수', '윤수', '뉸수', '눙수'];
  const newStudents = students .map(student => `${student} 최고`);
  const newStudentss = students .filter(student => student.length > 2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
