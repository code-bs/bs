import React from 'react';

function TodoList({ todos }) {
  const renderTodos = () => {
    return todos.map(todo => {
      return <li key={todo.id}>{todo.content}</li>;
    });
  };

  return <div>{todos.length > 0 ? <ul>{renderTodos()}</ul> : 'empty'}</div>;
}

export default TodoList;
