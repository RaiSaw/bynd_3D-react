import React, {useState, useEffect } from 'react'
import { Box, Text, Button, HStack, Select, SimpleGrid, VStack, Container, Card, FormLabel, Input, FormControl, FormErrorMessage } from "@chakra-ui/react";
import ModelCard from './ModelCard'
import axios from 'axios'
import '../App.css'
import { defineStyle } from '@chakra-ui/react'
/* import model from '../models.json'  import {Bmodels} from '../models'*/
//import Object from './filterObject';
//import { useForm } from 'react-hook-form'
export const style = defineStyle({
  mb: '2',
  borderRadius: 'xl',
  fontWeight: 'semibold',
  color: 'white',
  fontSize: {
    md: '8',
    lg:'10',
  },
  textShadow: '1px 1px 1px mediumblue',
})

const Models = () => {
  // main state
  const [models, setModels] = useState([]);
  const [filters, setFilters] = useState(models);
  // instance
  const mock = axios.create({
    baseURL: 'http://localhost:3001/models/'
  });
  console.log(models)

  // GET Request
  const fetchData = async () => {
    const getResponse = await mock.get("")
      setModels(getResponse.data)
      setFilters(getResponse.data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  //DELETE Request
  const deleteData = async (id) => {
    await mock.delete(`${id}`)
    .then(response => {
      console.log(`Data with id ${id} deleted successfully:`, response.data);
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
    setModels(models.filter((model) => model.id !== id))
    setFilters(models.filter((model) => model.id !== id))
  }
  /* Remove object func */
  /* const handleRemove = async (idToRemove) => {
    await mock.delete(`${idToRemove}`)
    Create a new array without the item to be removed just in state
    const removed = models.filter((model) => model.id !== idToRemove);
    setModels(removed);
    console.log(removed)
  }; */

  // Add model
  const [newModel, setNewModel] = useState({
     id: null,
     title: '',
     type: '',
  });
  // Image sample
  const img = 'Assets/simon-lee-U00xWfo5yJA-unsplash.jpg'
  // Generate ID
  const newId = Math.max(...models.map((model) => model.id), 0) + 1;
  /* const newId = models.length + 1 */
  // Create a new item object
  const newObject = { title: newModel.title, id: newId, type: newModel.type, imgUrl: img };

  // POST Request
  const postData = async () => {
    const postResponse = await mock.post("", newObject )
    setModels([postResponse.data, ...models])
    setFilters([postResponse.data, ...models])
    //setModels((prev)=>[postResponse.data, ...prev])
  }
  const handleAddModel = (e) => {
    e.preventDefault()
    // Update the state with the new item
    /* setModels([...models, newObject]); */
    postData([...models, newObject])
    // Clear the input fields
    setNewModel({
      id: null,
      title: '',
      type: '',
      /* imgUrl: '', */
     });
    setBlur(false)
  };

  // PUT Request
  const handleEdit = async (id) => {
    const updateData = {
      id,
      /* title: editTitle,
      type: editType */
    }
    try {
      const response = await mock.put(`${id}`, updateData)
    } catch (err) {
      console.log(`Error: ${err.emssage}`)
    }
  }

  /* Sorting func */
  const handleSort = () => {
  const sorted = models.toSorted((a, b)=> a.title.localeCompare(b.title))
  setFilters(sorted);
  /* console.log(sorted) */
  }
  /* Toggle for object filter */
  /* const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  }; */

  /* Filtering func */

  const handleObject = () => {
    // Filter objects
    const filter = models.filter((model) => model.type === 'object')
    /* setFilters(filter) */
    setFilters(filter)
    console.log(filter)
  }

  const handleScene = () => {
    // Filter scenes
    const filter = models.filter((model) => model.type === 'scene')
    setFilters(filter)
    console.log(filter)
  }

  const handleAbstract = () => {
    // Filter abstracts
    const filter = models.filter((model) => model.type === 'abstract')
    setFilters(filter)
    console.log(filter)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewModel({ ...newModel, [name]:value });
  };

  const [itemBlur, setBlur]= useState(false)
  const handleBlur = () => {
    setBlur(true)
  }

  return (
  <Box>
    <div className="container justify-content-center align-items-center" id="items">
      <div className="container my-4 flex col-lg-4" id="title">
        <Button as='h4' py={6} fontWeight='semibold' fontSize={['26','30','38']} onClick={() => fetchData()}>All Models</Button>
        <HStack pb={8}>
          <Button className='model-btn' onClick={() => handleObject()}>Objects</Button>
          <Button className='model-btn' onClick={() => handleScene()}>Scenes</Button>
          <Button className='model-btn' onClick={() => handleAbstract()}>Abstracts</Button>
          <Button className='model-btn' onClick={() => handleSort()}>Sort by name</Button>
        </HStack>
      </div>
      <div className="d-flex flex-wrap my-4 flex col-lg-12 justify-center" id="container">
        <SimpleGrid
          gridTemplateColumns="repeat(3,minmax(200px,1fr))"
          columns={{md:2, lg:3, xl:4}}
          gridGap={4}
          justifyContent='center'
         >
          {filters.map((model) => (
            <ModelCard
            key={model.id}
            id={model.id}
            title={model.title}
            type={model.type}
            imgUrl={model.imgUrl}
            deleteData={deleteData}
            />
        ))
        }
          {/* <Box id='cont' borderRadius='xl' boxShadow='dark-lg'> </Box> */}
      </SimpleGrid>
      </div>
    </div>
    <Container my='12' justifyContent='center' textAlign='center'>
      <Card p='2' boxShadow='2xl'>
      <Text as='h4'>Add New Model</Text>
      <form onSubmit={handleAddModel}>
        <VStack alignItems='start'>
        <FormControl isInvalid={itemBlur && newModel.title === ""} isRequired>
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
          {handleBlur &&
          <FormErrorMessage>Please type a title</FormErrorMessage>
          }
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
       {/*  <FormControl isInvalid={false}>
          <FormLabel htmlFor="image">Image</FormLabel>
          <Input
          id="image"
          type="url"
          name="imgUrl"
          value={newModel.imgUrl}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter a model image'
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl> */}
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

export default Models;