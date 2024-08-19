import './App.css';
import { useState } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'react 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래하기',
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <div className="App">
      <Header></Header>
      <Editor></Editor>
      <List></List>
    </div>
  );
}

export default App;
