import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { InputTodo } from './components/InputTodo';
import { TodoList } from './components/TodoList';
import { NavBar } from './components/NavBar';

function App() {
  const [state, setState] = useState([
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

  return (
    <div className='App'>
      <Header />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
