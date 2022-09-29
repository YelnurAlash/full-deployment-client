import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Login</Link>
        <Link to='/login'>Home</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
