import React, { useState } from 'react';

export const InputTodo = (props) => {
  const { addNewTodo } = props;

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addNewTodo(title);
      setTitle('');
    } else {
      alert('Please fill the task input field ');
    }
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
