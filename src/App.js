import './App.css';
import Navbar from './pages/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from './pages/homepage/Index';

function App() {
  return (
    <BrowserRouter class='w-full'>
      <Navbar/>
      <Index></Index>
    </BrowserRouter>
  );
}

export default App;
