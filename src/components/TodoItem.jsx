import React, { useState } from 'react';

export const TodoItem = (props) => {
  const { title, completed, toggle, deleteItem, editItem, id } = props;
  const isCompleted = completed ? 'completed' : '';
  const [edit, setEdit] = useState(false);

  const [state, setState] = useState(title);

  const handleDoubleClick = () => {
    setEdit((prev) => !prev);
  };

  const handleOnChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItem(id, state);
    setEdit((prev) => !prev);
  };

  return (
    <li onDoubleClick={handleDoubleClick}>
      {!edit && (
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
      )}
      {edit && (
        <form onSubmit={handleSubmit}>
          <input
            className='edit-input'
            type='text'
            onChange={handleOnChange}
            value={state}
          />
        </form>
      )}
    </li>
  );
};
