import React, {useState, } from 'react'
import '../App.css'
import models from '../models.json'
import { useToast, Box, Text, Button, HStack, Select, SimpleGrid, VStack, Flex, Container, Card, FormLabel, Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import ModelCard from './ModelCard'
import Object from './filterObject';
import style from './ModelCard'
import { useForm } from 'react-hook-form'
/* import {models} from '../models' */

const Models = () => {
  /* toggle used for object filter */
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };
  /* sorting func */
  const [sort, setSorted] = useState(models);

  const handleSort = () => {
  const sorted = models.toSorted((a, b)=> a.title.localeCompare(b.title))
  setSorted(sorted)
  }
  /* remove object func */
  const [remove, setRemove] = useState(models);
  
  const handleRemove = (idToRemove) => {
    // Create a new array without the item to be removed
    const removed = remove.filter((model) => model.id !== idToRemove);
    setRemove(removed);
  };
  /* adding an object */
  /* -Enum-
    const modelTypes = {
    object: 'object',
    scene: 'scene',
    abstract: 'abstract',
  } */
  const img = 'Assets/simon-lee-U00xWfo5yJA-unsplash.jpg'
  const [newModel, setNewModel] = useState({
     id: null,
     title: '',
     type: '',
    });
  const handleAddModel = (e) => {
    // Generate ID
    e.preventDefault()

    const newId = Math.max(...remove.map((model) => model.id), 0) + 1;
    /* const newId = remove.length + 1 ; */

    // Create a new item object
    const newObject = { title: newModel.title, id: newId, type: newModel.type, imgUrl: img };
    console.log(newObject)

    // Update the state with the new item
    setRemove([...remove, newObject]);
    console.log(remove)

    // Clear the input fields
    setNewModel({
       id: null,
       title: '',
       type: '',
      });
  };
  /* const handleChange = (e) => {
    setNewModel({ ...newModel, title: e.target.value });
  };*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewModel({ ...newModel, [name]:value });
  };
  const handleBlur = () => {
    console.log('Title field is empty.')
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
      onClick={() => handleSort()}
      >
        Sort by name
      </Button>
      </HStack>
      </div>
      <div className="d-flex flex-wrap my-4 flex col-lg-12 justify-center" id="container">
      {toggle ?
        (<Object/>) : (
        <SimpleGrid
          gridTemplateColumns="repeat(3,minmax(200px,1fr))"
          columns={{md:2, lg:3, xl:4}}
          gridGap={4}
          justifyContent='center'
         >
          {remove.map((model) => (
          <Box id='cont' borderRadius='xl' boxShadow='dark-lg'>
            <ModelCard
            key={model.id}
            title={model.title}
            type={model.type}
            imgUrl={model.imgUrl}
            position='relative'
            />
            <Flex gap='4' justifyContent='center'>
            {/* <Button sx={style} className='edit-btn'>Edit</Button> */}
            <Button m='2' sx={style} onClick={() => handleRemove(model.id)} className='edit-btn'>Remove</Button>
            </Flex>
          </Box>
          ))
        }
      </SimpleGrid>
      )}
      </div>
    </div>
    <Container my='12' justifyContent='center' textAlign='center'>
      <Card p='2' boxShadow='2xl'>
      <Text as='h4'>Add New Model</Text>
      <form onSubmit={handleAddModel}>
        <VStack alignItems='start'>
        <FormControl isInvalid={false} isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
          id="title"
          type="text"
          name="title"
          value={newModel.title}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter a title model'
          /* {...register('title', {
            required: 'Title is required',
          })} */
          />
          <FormErrorMessage>Title is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={false} isRequired>
          <FormLabel htmlFor="type">Type:</FormLabel>
          <Select id="type" type="type" name="type" value={newModel.type} onChange={handleChange} placeholder='Select a model type'>
          {/*{Object.values(modelTypes).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))} */}
            <option value="object">object</option>
            <option value="scene">scene</option>
            <option value="abstract">abstract</option>
          </Select>
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
          <Button alignSelf='center' className='model-btn' my='2' type="submit">
            Submit Model
          </Button>
          </VStack>
        </form>
        </Card>
      </Container>
  </Box>
  )
}

export default Models