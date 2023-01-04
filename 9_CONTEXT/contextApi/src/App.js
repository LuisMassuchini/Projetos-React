import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/about" element={<About/>}/>
        <Route to="/products" element={<Products />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
