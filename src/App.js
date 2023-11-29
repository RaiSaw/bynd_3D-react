import * as React from 'react';
import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import About from './Pages/About';
import Error from "./Pages/Error";
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
    </ChakraProvider>
  )
}

export default App;
