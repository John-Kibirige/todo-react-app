import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';
import { NavBar } from './components/NavBar';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  console.log(todoItems);

  const toggle = (id) => {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };
  return (
    <div className='App'>
      <Header />
      <InputTodo />
      <TodoList items={todoItems} toggle={toggle} />
    </div>
  );
}

export default App;
