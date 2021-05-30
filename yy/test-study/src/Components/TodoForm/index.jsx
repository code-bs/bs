import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmit = () => {
    addTodo(text);
    setText('');
  };
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="할일을 입력하시오" />
      <button type="button" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
}

export default TodoForm;
