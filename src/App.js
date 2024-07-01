import React from 'react';
import TaskInput from './components/taskInput';
import TaskList from './components/taskList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className='space'> To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
