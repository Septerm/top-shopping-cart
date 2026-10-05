import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

function App() {

  const [cart, setCart] = useState([
    
  ]);



  return(

    <>
      <Navbar cartData={cart}/>
     
      <Outlet context={{cart, setCart}}/>
       <Footer/>
      
    </>
  );

  
}

export default App
