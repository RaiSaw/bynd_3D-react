import React from 'react'
import { Box, Container, Button, HStack} from "@chakra-ui/react";
import Card from "../components/Cards"
import "../App.css";

const categories = [
  {
    getImageSrc: () => require("../Assets/Characters.png"),
    title: "3D Models",
    alt:"Character models collage"
  },
  {
    getImageSrc: () => require("../Assets/Envi.png"),
    title: "Environment and Scenes",
    alt:"Environment and Scenes collage"
  },
  {
    getImageSrc: () => require("../Assets/mater.png"),
    title: "Texture, Materials and HDRIs",
    alt:"Materials collage"
  },
]

const Home = () => {
  return (
    <main className="flex-shrink-0">
      <section className="py-5 container">
        <div className="container col-xxl-8 px-4 py-5 my-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="/Characters2✂️.png" className="d-block mx-lg-auto img-fluid rounded" alt="3D Models" width="800" height="600" loading="lazy" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="artstation.com"/>
              <span className="sr-only">Image credit: artstation.com</span>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Step into a world of endless possibilities</h1>
              <p className="lead">From stunning visualizations to mind-bending designs, unleash your imagination and bring your ideas to life. No more barriers, no more limitations – immerse yourself in a world where imagination knows no bounds.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button as='a' href='/signup' id="signup-btn" boxShadow='dark-lg' justifySelf="space-between" fontWeight='bold' fontSize={18} size={['sm','md','lg']} color='#fff' rounded='15px'>Sign up</Button>
                <Button as='a' href='/login' id="login-btn" boxShadow='dark-lg' justifySelf="space-between" fontWeight='bold' fontSize={18} size={['sm','md','lg']} color="#6c757d" rounded='15px' _hover={{bg:'#6c757d'}}>
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6">
        <div className="container justify-content-center">
          <div className="container p-4 py-lg-5 align-items-center justify-content-center rounded-3 border shadow-lg">
            <div className="container px-4 py-4 justify-content-center align-items-center" id="categories-cards">
              <h2 className="pb-2 border-bottom">All Categories</h2>
              <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
              {/* <Box
          direction="row"
          display="grid"
          gridTemplateColumns="repeat(5,minmax(0,1fr))"
          gridGap={8}
         > */}
            {categories.map((category) => (
            <Card
              imageSrc={category.getImageSrc()}
              key={category.title}
              title={category.title}
              alt={category.alt}
            />
            ))}
            {/*  </Box> */}
            </div>
              </div>
              <div className="container d-flex justify-content-center align-items-center col-md-4">
                  <Button as='a' href='gallery' id="gallery-btn" boxShadow='dark-lg' justifySelf="space-between" fontWeight='bold' fontSize={18} size={['sm','md','lg']} color='#fff' rounded='15px'>
                    View Gallery
                  </Button>
                {/* <button type="button" id="gallery-btn" onclick="" className="btn btn-primary btn-lg ml-5">Go to Gallery</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home