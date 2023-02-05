import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';

function App() {
  return (
    <div className='App-body'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='cryptocurrencies' element={<Cryptocurrencies />}></Route>
          <Route path='news' element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
