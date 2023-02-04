import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <div className='border border-3 m-2 p-2 border-danger'>
      <h1>Welcome to Edupoly ReactJS</h1>
      <Counter/>
      <Todolist/>
    </div>
  );
}

export default App;
