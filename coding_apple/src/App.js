/* eslint-disable */
// useState 라는 내장함수를 사용할 수 있음
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 변수를 let으로 생성
  let posts = '강남 고기 맛집';

  // 변수를 State로 생성 State = 변수 대신 쓰는 데이터 저장공간
  // let [a, b] = [10, 100] ===> ES6 destructuring 문법 a 에 10, b 에 100 넣음
  // state의 변수값을 일반적인 방법으로 변화시키는 것은 권장하지 않음
  // 값 변경은 싹 대체된다. 특정 인덱스만 변경하는 것은 불가능하다. 
  let [title1, changeTitle] = useState('남자 코트 추천'); // [a, b] a는 텍스트 데이터가 그대로 들어가고 b는 a 데이터를 변경하는 함수가 들어간다?
  let [title2, changeTitle2] = useState(['남자 코트 추천', '고성 놀러온나']);
  let [like, updateLike] = useState(0);

  // state 의 변수 값을 일반적인 방식으로 바꾸면 재 랜더링이 안될 수도 있다.?? 
  function change() {
    // 배열을 복사한 뒤 해당 인덱스의 값을 바꿔서 changetitile2를 콜한다. 복사하는 방식이 특이함
    // TODO 배열 복사 ES6 문법 찾아보기
    let newArray = [...title2];
    newArray[0] = '여자 코트 추천';
    changeTitle2(newArray);
  }

  // 그럼 State 쓰는 이유. 일반 변수는 변수값 변경되면 새로고침이 안되지만, Status 쓰면 데이터 변경 시 자동 렌더링
  // 그럼 다 State 로 할까? ㄴㄴ 수시로 바뀌는 거만 그렇게 처리
  // return 시 연속된 태그는 반환할 수 없다. 하나의 태그 안에 감싸서 return 해야한다. 
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <button onClick={change}>button</button>
      <div className='list'>
        <h3> {posts} <span onClick={ () => { updateLike(like + 1) } }>👍</span> { like } </h3>
        <p>2월 17일</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {title1} </h3>
        <p>2월 17일</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {title2[0]} </h3>
        <p>2월 17일</p>
        <hr/>
      </div>
      <Modal />

    </div>
  );
}

// component 만들 때는 첫 글자를 대문자로
// return 시 묶기 싫으면 <></> fragment 라고하는 걸로 감싸면 된다. 
// 컴포넌트도 너무 많이 만들면 관리하기 힘듦. 반복적으로 필요한 것만 사용
function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
