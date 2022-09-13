import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';
import { NavBar } from './components/NavBar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem('rxt-todo')) || []
  );
  console.log('this is the todoItems ', todoItems);

  useEffect(() => {
    localStorage.setItem('rxt-todo', JSON.stringify(todoItems));
    console.log('this fires just fine');
  }, [todoItems]);

  const toggle = (id) => {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  const addNewTodo = (newTitle) => {
    setTodoItems((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          title: newTitle,
          completed: false,
        },
      ];
    });
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const editItem = (id, newValue) => {
    setTodoItems((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, title: newValue } : todo;
      });
    });
  };

  return (
    <div className='App'>
      <Header />
      <InputTodo addNewTodo={addNewTodo} />
      <TodoList
        items={todoItems}
        toggle={toggle}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
