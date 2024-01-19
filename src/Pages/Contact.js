import React from 'react'
import { Box, Container, Flex} from "@chakra-ui/react";
import "./Contact.css";

const Contact = () => {
  return (
    <Flex py={20} height={730} align='center' justify='center'>
    <Box
      as="section"
      w={['80%', '100%', '100%']}
      left={0}
      right={0}
      mt={20}
      alignContent='center'
      justifyContent='center'
      >
      <Container maxWidth="1280px">
      <div className="mx-24 px-24 text-white py-6" id="card-Contact">
        <div className="flex justify-end">
            <a href="/"><i className="fa-solid fa-xmark" id="x"></i></a>
        </div>
        <div className="title">
            <h1 className="text-xl my-4" id='contact-title'>Contact us</h1>
            <span>
                <i className="fa-solid fa-envelope"></i>
            </span>
        </div>
        <p id='contact-p' className="text-base mb-4">We'd love to hear from you.<br />Please drop your name, email and message.</p>
        <form id='contactForm' action="#" method="POST">
            <label className='label-contact' for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
            <label className='label-contact' for="email">Email:</label>
            <input type="email" id="emailContact" name="email" placeholder="Enter your email" required />
            <label className='label-contact' for="message">Message:</label>
            <textarea className="text-black" id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
            {/* <!-- <input type="submit" value="Submit"/> --> */}
            <button id="btn-contact" type="submit" className="btn btn-primary px-4 m-2 me-md-2 fw-bold" style={{backgroundColor: 'blue'}}>Submit</button>
        </form>
        <div className="space-x-8 my-6 flex justify-center">
            <a className="socials" href="linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
            <a className="socials" href="instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a className="socials" href="discord.com"><i className="fa-brands fa-discord"></i></a>
        </div>
        {/* <div className="my-3">
            <p>Go back to ...</p>
            <ul className="list">
                <li className="card-item">
                    <a className="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="card-item">
                    <a className="nav-link" href="gallery.html">Gallery</a>
                </li>
                <li className="card-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Explore
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Learn</a></li>
                      <li><a className="dropdown-item" href="#">Create</a></li>
                      <li><a className="dropdown-item" href="#">Generate with AI ✨</a></li>
                    </ul>
                </li>
            </ul>
        </div> */}
      </div>
      </Container>
      </Box>
      </Flex>
  )
}

export default Contact