import React from 'react';
import TodoList from './Components/TodoList';

const todos = [
  { id: 1, content: '잠 자기' },
  { id: 2, content: '테스트 코드 공부하기' },
];

function App() {
  return (
    <div className="app">
      <span>todo</span>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
