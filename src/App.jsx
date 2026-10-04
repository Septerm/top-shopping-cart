import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

function App() {

  const [cart, setCart] = useState([
    {
      id: 'jack12',
      title: "Long sleeve Jacket",
      image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
      price: 150,
      quantity: 1,
    }
  ]);



  return(

    <>
      <Navbar cartData={cart}/>
      <Outlet context={{cart, setCart}}/>
    </>
  );

  
}

export default App
