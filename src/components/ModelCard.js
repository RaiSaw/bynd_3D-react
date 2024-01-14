import { Text, VStack, CardBody, Card, Button, useColorModeValue, Flex, ButtonGroup, useEditableControls, Label, EditablePreview, Editable, EditableInput, Input } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon, } from '@chakra-ui/icons'
import React, {useState} from "react";
import {motion} from 'framer-motion'
import style from './Models'
import '../App.css'


const EditableControls =  () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
      <Button rightIcon={<CheckIcon />} {...getSubmitButtonProps()}>Save</Button>
      <Button rightIcon={<CloseIcon />} {...getCancelButtonProps()}>Cancel</Button>
    </ButtonGroup>
  ) : (
    <Flex justifyContent='start'>
      <Button
      size='sm'
      className='card-btn'
      variant='ghost'
      sx={style}
      rightIcon={<EditIcon color='#6c757d'/>}
      {...getEditButtonProps()}
      >
        Edit
      </Button>
    </Flex>
  )
}

const ModelCard = ({ title, imgUrl, type, deleteData, id }) => {
    return(
        <Card
        boxShadow='dark-lg'
        /* className="img-3d" */
        borderRadius='xl'
        as={motion.span}
        left={0}
        right={0}
        /* mx={4} */
        bg={`url(${imgUrl}) top/cover no-repeat`}
        textShadow='1px 1px #000'
        alt={`${title} image`}
        type={type}
        filter='auto'
        invert='8%'
        fontFamily={'Poppins'}
        px={4}
        pt={8}
        fontWeight='bold'
        >
        <CardBody pt={12} pb={4}>
          <VStack pt={12} px='4' alignItems='flex-start' color='white' h='100%' justifyContent='flex-end' fontSize={['8','9','11']}>{/* fontSize={['8','10','12']} */}
          <Flex gap='2'>
          <Text>Title:</Text>
          <Editable
          defaultValue={title}
          fontSize='md'
          isPreviewFocusable={true}
          selectAllOnFocus={false}
          >
            <EditablePreview _hover={{
              background: useColorModeValue("gray.500", "gray.700"), px:'2'
            }}/>
            <Input
            as={EditableInput}
            />
            <EditableControls/>
          </Editable>
          </Flex>
          <Flex gap='2'>
          <Text>Type:</Text>
          <Editable
          isPreviewFocusable={true}
          selectAllOnFocus={false}
          defaultValue={type}
          fontSize='sm'
          >
            <EditablePreview _hover={{
              background: useColorModeValue("gray.500", "gray.700"), px:'2'
            }}/>
            <EditableInput/>
            <EditableControls/>
          </Editable>
          </Flex>
          <Flex gap='2' fontSize={['8','9','11']}>
          <Text>Creator:</Text>
          <Editable
          isPreviewFocusable={true}
          selectAllOnFocus={false}
          defaultValue='Name'
          fontSize='sm'
          >
            <EditablePreview _hover={{
              background: useColorModeValue("gray.500", "gray.700"), px:'2'
            }}/>
            <Input
            as={EditableInput}
            />
            <EditableControls/>
          </Editable>
          </Flex>
          </VStack>
          {/* <Image src={imageSrc} alt={alt} objectFit='cover' borderRadius="xl" height='100%' width='100%'/> */}
        </CardBody>
        <Flex gap='4' justifyContent='center'>
             <Button m='2' className='edit-btn'>Edit</Button>
             <Button m='2' onClick={() => deleteData(id)} className='edit-btn'>Remove</Button>
        </Flex>
      </Card>
    )
}
export default ModelCard;
