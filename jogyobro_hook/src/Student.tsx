import React from 'react';

interface StudentInfo {
    name: string;
    age: number;
    isGirlfriend: boolean;
}

// 객체를 인터페이드로 줄 때는 interface 를 써주자
function Student(props: StudentInfo) {
//function Student({ age, name }: StudentInfo) {  // props로 데이터를 한두개만 받고 싶을 때
        return (
        <>
            <h1>Student</h1>
            <div>이름은 {props.name}</div>
            <div>나이는 {props.age}</div>
            <div>여자친구는 {props.isGirlfriend}</div>
        </>
    );
}

export default Student;