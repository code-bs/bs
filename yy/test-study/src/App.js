import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import Editor from './Components/Editor';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <h1>todo</h1>
      <TodoList todos={todos} />
      <Editor />
    </div>
  );
}

export default App;
