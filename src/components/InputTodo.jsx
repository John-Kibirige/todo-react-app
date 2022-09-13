import React, { useState } from 'react';

export const InputTodo = (props) => {
  const { addNewTodo } = props;

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add todo...'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <button className='add-todo'>+</button>
    </form>
  );
};
