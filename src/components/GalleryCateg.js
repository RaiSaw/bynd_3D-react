import React from 'react'
import { Box } from "@chakra-ui/react";
import '../App.css'

const GalleryCateg = () => {
  return (
    <Box mt={16}>
    <div className="container marketing">
      {/* <!-- Three columns of text below the carousel --> */}
      <div className="row">
        <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="Assets/cdd20-9-dkDEXWGzI-unsplash.jpg" alt='3dObject'/>
          <h2 className="fw-normal">Objects</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, deserunt hic vel maxime laudantium.</p>
          <p className="bt"><a className="btn btn-secondary" href="/">View more &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="Assets/amr-taha-qJit4JqiYLU-unsplash.jpg" alt='3dScene'/>
          <h2 className="fw-normal">Scenes</h2>
          <p>Similique, culpa tempore dolorem laudantium, pariatur nisi vel iste veniam esse.</p>
          <p className="bt"><a className="btn btn-secondary" href="/">View more &raquo;</a></p>
        </div>
        <div className="col-lg-4 justify-center">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="Assets/simon_lee_unsplash.jpg" alt='3dAbstract'/>
          <h2 className="fw-normal">Materials, Textures and HDRIs</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p className="bt"><a className="btn btn-secondary" href="/">View more &raquo;</a></p>
        </div>
      </div>
    </div>
    </Box>
  )
}

export default GalleryCateg;