import React from 'react';

export const TodoItem = (props) => {
  const { title, completed, toggle, deleteItem } = props;
  const isCompleted = completed ? 'completed' : '';
  return (
    <li>
      <div>
        <input
          type='checkbox'
          checked={completed}
          name='completed'
          onChange={toggle}
        />
        <span className={`todo-text ${isCompleted}`}>{title}</span>
        <button className='del-btn' onClick={deleteItem}>
          delete
        </button>
      </div>
    </li>
  );
};
