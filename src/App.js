import './App.css';
import Navbar from './pages/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/homepage/Index';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    const blob = document.getElementById("blob");

    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({ 
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
  }, []);

  return ( 
    <BrowserRouter>
      <div id="gradientBackground">
        <div id="blob"/>
        <div id="blur"/>
      </div>
      <div id="pageContent">
        <Navbar id="Navbar"/>
        <Index id="Index"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
