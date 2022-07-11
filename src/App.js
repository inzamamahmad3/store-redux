
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={ <Cart />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
