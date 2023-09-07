import './App.css';
import Navbar from './pages/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from './pages/homepage/Index';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route exact path="/skills" element={null}/>
        <Route exact path="/projects" element={null}/>
        <Route exact path="/about me" element={null}/>
        <Route exact path="/timeline" element={null}/>
        <Route exact path="/contact" element={null}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
