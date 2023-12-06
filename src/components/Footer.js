import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Image, Circle} from "@chakra-ui/react"
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer d-flex flex-row flex-wrap justify-content-between align-items-center py-4 px-3 my-4 border-top">
      <div className="col d-flex space-x-4">
        <Circle overflow='hidden' boxShadow='dark-lg'>
          <Link to="/"><Image className='image' src="./Assets/bynd.png" alt="Logo" boxSize='200px'/></Link>
        </Circle>
        <span className="text-body-secondary align-self-center">&copy; Bynd 2023</span>
      </div>
      <div className="col d-flex space-x-4 justify-content-end">
      <ul className="nav col d-flex align-items-center justify-content-end">
        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="/gallery" className="nav-link px-2 text-body-secondary">Gallery</a></li>
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
