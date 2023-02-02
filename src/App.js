
import React from 'react';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <div className='border border-3 m-2 p-2 border-danger'>
      <h1>Welcome to Edupoly ReactJS</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
