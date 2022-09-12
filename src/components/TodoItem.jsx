import React from 'react';

export const TodoItem = (props) => {
  const { title, toggle } = props;

  return (
    <li>
      <div>
        <input
          type='checkbox'
          name='completed'
          id='completed-checkbox'
          onChange={toggle}
        />
        <span className='todo-text'>{title}</span>
        <button className='del-btn'>D</button>
      </div>
    </li>
  );
};
