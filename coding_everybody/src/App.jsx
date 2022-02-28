import logo from './logo.svg';
import './App.css';
import Toc from './components/Toc.js'
import Content from './components/Content.js'
import Subject from './components/Subject.js'

// function App() {
//  return ( ); } 이게 jsx 문법 이었음

function App() {
  return (
    <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Toc></Toc>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
