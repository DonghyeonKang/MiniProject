// library import 
import React from 'react';
// css import
import './App.css';
import Box from './Box.jsx'

function App() {
    return (
        // 아래 부분을 index.html로 넣어 준다. index.js 가 App.jsx index.html 연결 해줌
        // class 가 className 으로 바뀜
        <main>
            <Box name="영차영차"/>
            <Box name="차차차차"/>
            <Box name="영영영영"/>
            <Box name="영차영차"/>
        </main>
    );
}

// App 으로 export
export default App;