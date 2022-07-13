
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Check from './check';
import CounterRedux from './CounterRedux';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<CounterRedux />} />
        <Route path='/check' element={<Check />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
