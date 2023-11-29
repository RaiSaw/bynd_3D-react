import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Image, Box, Flex, VStack, Container, Text, HStack} from "@chakra-ui/react"
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer d-flex flex-row flex-wrap justify-content-between align-items-center py-4 px-3 my-4 border-top">
      <div className="col d-flex space-x-4">
        <Box overflow='hidden' borderRadius='full' boxShadow='dark-lg'>
          <Link to="/"><Image className='image' src="./bynd.png" alt="Logo" boxSize='200px'/></Link>
        </Box>
        <span className="text-body-secondary align-self-center">&copy; Bynd 2023</span>
      </div>
      <div className="col d-flex space-x-4 justify-content-end">
      <ul className="nav col d-flex align-items-center justify-content-end">
        <li className="nav-item"><a href="index.html" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="gallery.html" className="nav-link px-2 text-body-secondary">Gallery</a></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Learn</a></li>
            <li><a className="dropdown-item" href="/">Create</a></li>
            <li><a className="dropdown-item" href="/">Generate with AI ✨</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Connect
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">About</a></li>
            <li><a className="dropdown-item" href="/">FAQs</a></li>
            <li><a className="dropdown-item" href="/">Community</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="card.html">Contact us</a></li>
          </ul>
        </li>
      </ul>
      </div>
      </footer>
    )
  }
}
