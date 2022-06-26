import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return (
  <div className='App'> 
    <Navbar/>
    <Content/>
    <Footer/>
  </div>
   
  )
}

export default App