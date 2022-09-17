import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const { items, toggle, deleteItem, editItem } = props;
  const todoElements = items.map((item) => (
    <TodoItem
      key={item.id}
      title={item.title}
      completed={item.completed}
      toggle={() => {
        toggle(item.id);
      }}
      deleteItem={() => {
        deleteItem(item.id);
      }}
      editItem={editItem}
      id={item.id}
    />
  ));
  return <ul>{todoElements}</ul>;
};
