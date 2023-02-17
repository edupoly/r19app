
import './App.css';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter';
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Welcome to Edupoly ReactJS</h1>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
