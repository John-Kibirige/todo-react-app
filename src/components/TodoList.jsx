import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {
  const { items, toggle } = props;
  const todoElements = items.map((item) => (
    <TodoItem
      key={item.id}
      title={item.title}
      toggle={() => {
        toggle(item.id);
      }}
    />
  ));
  return <ul>{todoElements}</ul>;
};
