import './App.css';
import React from 'react'
import Home from './components/Main/Home';
import {Route, Routes} from "react-router-dom";
import Portfolio from './components/Main/Portfolio';
import Contectus from './components/Main/Contectus';

function App() {

  return (
    <>
    <Routes >
        <Route path='/' element = {<Home/>} />
        <Route path='portfolio' element = {<Portfolio/>} />
        <Route path='contact-us' element = {<Contectus/>} />
    </Routes>
    </>
  );
}

export default App;
