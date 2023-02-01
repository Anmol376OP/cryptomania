import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='exchanges' element={<Exchanges />}></Route>
        <Route path='cryptocurrencies' element={<Cryptocurrencies />}></Route>
        <Route path='crypto/:coinId' element={<CryptoDetails />}></Route>
        <Route path='news' element={<News />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
