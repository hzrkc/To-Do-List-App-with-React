import React from 'react';

const TodoItem = ({ text, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <span>{text}</span>
    </div>
  );
};

export default TodoItem;
