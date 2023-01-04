import "./App.css";

//1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/*2 - link com react router*/}
        <Navbar/>
        {/* 9 - search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*6 - nested router*/}
          <Route path="/products/:id/info" element={<Info />} />
          {/*4 - routa dinamica*/}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />}/>
          {/*7 - no match route*/}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
