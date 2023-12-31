import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { Box, Text, Image} from "@chakra-ui/react";
import '../App.css'

function Slider(props) {
  return (
    <Box>
      <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      >
        {props.data.map((carousel) => (
          <div key={carousel.title}>
          <div className="carousel-item active">
          <a className="img-cont" href={carousel.href}><Image className="img-fluid sm-w-300 sm-h-300" src={carousel.getImageSrc()} alt={carousel.alt}/></a>
          <div className="container">
            <div className="carousel-caption text-start">
              <Text as='h3' mb={4}>{carousel.title}</Text>
              <Text as='h3' mb={6} fontSize={['14','16','20']}className="opacity-75">{carousel.description}</Text>
              <p><a className="btn btn-lg btn-primary" id="carousel-btn" href="/">Learn more</a></p>
            </div>
          </div>
        </div>
        </div>
        ))}
      </Carousel>
    </Box>
  );
}
export default Slider;