import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <h1>todo</h1>
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
}

export default App;
