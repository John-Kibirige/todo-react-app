import React from 'react';

export const TodoItem = (props) => {
  const { title, completed, toggle } = props;

  return (
    <li>
      <div>
        <input
          type='checkbox'
          checked={completed}
          name='completed'
          onChange={toggle}
        />
        <span className='todo-text'>{title}</span>
        <button className='del-btn'>D</button>
      </div>
    </li>
  );
};
