import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';

function App() {

  return (
    <Provider store={store}>
      <div className='border border-2 m-2 p-2 border-success'>
        <h1>Welcome to Edupoly ReactJS</h1>
        <Countries></Countries>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
