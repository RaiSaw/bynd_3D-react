import React from 'react'
import { Box } from "@chakra-ui/react";
import "../App.css";
import GalleryCateg from '../components/GalleryCateg';
import Slider from '../components/Slider';
import Models from '../components/Models';

const carousel = [
  {
    getImageSrc: () => require("../Assets/javier-miranda-bDFP8PxzW1Q-unsplash.jpg"),
    title: "Cosmic Worlds",
    alt:"outer space scene",
    description:"Have you ever wished to explore distant galaxies, uncover ancient civilizations, or bring your imagination to life?",
    href:"https://unsplash.com/@nuvaproductions?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  },
  {
    getImageSrc: () => require("../Assets/birhat-jiyad-OMGORs5og5M-unsplash.jpg"),
    title: "Create with AI ✨",
    alt:"Cyborg model",
    description:"Explore and discover the perfect assets that will elevate your projects to new heights.",
    href:"https://unsplash.com/@birhatjiyad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  },
  {
    getImageSrc: () => require("../Assets/milad-fakurian-k4WPhf596b4-unsplash.jpg"),
    title: "Capture the World",
    alt:"nature scene",
    description:"Bring the real world into the digital realm and unlock a whole new dimension of creativity and imagination.",
    href:"https://unsplash.com/@fakurian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  }
]
const Gallery = () => {
  return (
    <Box
    as="section"
    left={0}
    right={0}
    mt={14}
    >

      <Slider data={carousel}/>
      <GalleryCateg/>
      <hr className="my-5"/>
      <Models/>
      </Box>
  )
}

export default Gallery