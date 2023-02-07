import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border border-4 border-danger p-2 w-100'>
      <h1>Welcome to Edupoly</h1>
      <a href="/products">Products</a>
      <br></br>
      <Link to={"/products"}>Goto Products</Link>
      <br></br>
      <Link to="/countries">Countries</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
