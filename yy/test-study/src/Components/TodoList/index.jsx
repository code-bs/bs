import React from 'react';

function TodoList({ todos }) {
  const renderTodos = () => {
    return todos.map(todo => {
      return <li key={todo.id}>{todo.content}</li>;
    });
  };

  return <ul>{todos.length > 0 ? renderTodos() : 'empty'}</ul>;
}

export default TodoList;
