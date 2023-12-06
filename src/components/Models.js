import React, {useState, } from 'react'
import '../App.css'
import models from '../models.json'
import { Box, Text, Button, HStack, Spacer, SimpleGrid} from "@chakra-ui/react";
import ModelCard from './ModelCard'
import Object from './filterObject';

const Models = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  const [sort, setSorted] = useState(false);
  const sorted = () => {
    return (
    models.toSorted((a, b)=> a.title.localeCompare(b.title))
    .map((model) => (
      <ModelCard
      key={model.title}
      title={model.title}
      type={model.type}
      imgUrl={model.imgUrl}
      />
    )))

  }

  return (
  <Box>
    <div className="container justify-content-center align-items-center" id="items">
      <div className="container my-4 flex col-lg-4" id="title">
      <Text as='h4' py={6} fontWeight='semibold' fontSize={['26','30','38']}>All Models</Text>
      <HStack pb={8}>
      {/* <Button className='model-btn'>Scenes</Button>
      <Button className='model-btn'>Abstracts</Button> */}
      <Button
      className='model-btn'
      onClick={() => toggleButton()}
      >
        Objects
      </Button>
      <Button
      className='model-btn'
      onClick={() => setSorted(true)}
      >
        Sort by name
      </Button>
      </HStack>
      </div>
      <div className="d-flex flex-wrap my-4 flex col-lg-12 justify-center" id="container">
      {toggle ?
        <Object/> : (
        <SimpleGrid
          /* gridTemplateColumns="repeat(3,minmax(200px,1fr))" */
          columns={{md:2, lg:3, xl:4}}
          gridGap={4}
          justifyContent='center'
         >
        {!sort ?
          models.map((model) => (
            <ModelCard
            key={model.title}
            title={model.title}
            type={model.type}
            imgUrl={model.imgUrl}
            />
          ))
          : sorted()
        }
      </SimpleGrid>
      )}
      </div>
    </div>
    <Spacer/>
    <div className="my-3">
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" id='active' href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item">
            <a className="page-link" href="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Box>
  )
}

export default Models