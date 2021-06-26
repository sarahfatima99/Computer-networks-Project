import React, { Component } from 'react';

import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'
import Button from './components/button'
import Signup from './components/Signup'
import Pract from './components/Pract'
function App() { 
  return (
    <div className="App">
{/* <Navbar/>
<Button/>
<Products/>
<Footer/>  */}
{/* <Counter/> */}
<Pract title="hello" data={['a','b']}/>
 </div>
  );
}

export default App;
