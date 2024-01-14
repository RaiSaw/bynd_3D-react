import '../App.css'
import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import {HamburgerIcon} from '@chakra-ui/icons'
import { Circle, Image, Spacer} from "@chakra-ui/react";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() =>{
    let prevScrollPos = window.scrollY

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const headerElement = headerRef.current
      if (!headerElement){
        return
      }
      if (prevScrollPos > currentScrollPos){
        headerElement.style.transform = 'translateY(0)'
      }else{
        headerElement.style.transform = 'translateY(-200px)'
      }
      prevScrollPos = currentScrollPos
    }
    window.addEventListener('scroll', handleScroll)
      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, [])
  /* SPA
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }; */
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
      <Circle overflow='hidden' boxShadow='dark-lg'>
        <Link to="/" className="logo"><Image className='image' src="./Assets/bynd.png" alt="Bynd Logo" boxSize="45px"/></Link>
      </Circle>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item"> */}
          <NavLink className="link" to='/' aria-current="page" exact='true'>Home</NavLink>
        {/* </li> */}
          {/*
            <a className="nav-link" href="/">Home</a>
          */}
          {/* <li className="nav-item"> */}
          <NavLink className="link" to="/gallery">Gallery</NavLink>
          {/* </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="/gallery.html">Gallery</a>
          */}
          <NavLink className="link" to="/explore">Explore</NavLink>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Learn</a></li>
              <li><a className="dropdown-item" href="/">Create</a></li>
              <li><a className="dropdown-item" href="/">Generate with AI ✨</a></li>
            </ul>
          </li> */}
          <NavLink className="link" to="/connect">Connect</NavLink>
          {/* <li className="nav-item dropdown">
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
          </li> */}
        </ul>
        <Spacer/>
        <form className="d-flex col-lg-6" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button id="search" className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  );
};
export default Header;
