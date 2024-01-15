import { Box, Tooltip, IconButton, Text, VStack, CardBody, Card, Button, useColorModeValue, Flex, ButtonGroup, useEditableControls, Label, EditablePreview, Editable, EditableInput, Input } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon, } from '@chakra-ui/icons'
import React, {useState} from "react";
import {motion} from 'framer-motion'
import { defineStyle } from '@chakra-ui/react'
import '../App.css'

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
const EditableControls =  () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton
        icon={<CloseIcon boxSize={3} />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : null;
}


const ModelCard = ({ title, imgUrl, type, deleteData, id, handleChangeTitle, editData, handleSubmit, handleInput, edited, setEdited }) => {
    return(
      <Box id='cont' borderRadius='xl' boxShadow='dark-lg'>
        <Card
        /* boxShadow='dark-lg' */
        /* className="img-3d" */
        borderRadius='none'
        as={motion.span}
        left={0}
        right={0}
        /* mx={4} */
        bg={`url(${imgUrl}) center/cover no-repeat`}
        textShadow='1px 1px #000'
        alt={`${title} image`}
        type={type}
        filter='auto'
        invert='8%'
        fontFamily={'Poppins'}
        px={4}
        pt={28}
        fontWeight='bold'
        objectFit=''
        >
        <CardBody pt={16} pb={4}>
          <VStack pt={16} px='4' alignItems='flex-start' color='white' h='100%' justifyContent='flex-end' fontSize={['8','9','11']}>{/* fontSize={['8','10','12']} */}
          <Flex gap='2'>
          <Text>Title:</Text>
          <Editable
          defaultValue={title}
          fontSize='md'
          isPreviewFocusable={true}
          selectAllOnFocus={false}
          onSubmit={handleSubmit}
          value={edited.title}
          onChange=/* {handleInput} */{(newValue) => setEdited(newValue)}
          >
          <Tooltip label="Click to edit" shouldWrapChildren={true}>
          <EditablePreview
            px={2}
            _hover={{
              background: useColorModeValue("gray.600", "gray.700")
            }}
          />
          </Tooltip>
            {/* <EditablePreview _hover={{
              background: useColorModeValue("gray.500", "gray.700"), px:'2'
            }}/> */}
            <Input
            as={EditableInput}
            name='title'
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
          value={edited.type}
          onSubmit={handleSubmit}
          onChange={(newValue) => setEdited(newValue)}
          >
          <Tooltip label="Click to edit" shouldWrapChildren={true}>
          <EditablePreview
            px={2}
            _hover={{
              background: useColorModeValue("gray.600", "gray.700")
            }}
          />
          </Tooltip>
            <Input
            as={EditableInput}
            name='type'
            />
            <EditableControls/>
          </Editable>
          </Flex>
          {/* <Flex gap='2' fontSize={['8','9','11']}>
          <Text>Creator:</Text>
          <Editable
          isPreviewFocusable={true}
          selectAllOnFocus={false}
          defaultValue='Name'
          fontSize='sm'
          >
          <Tooltip label="Click to edit" shouldWrapChildren={true}>
          <EditablePreview
            px={2}
            _hover={{
              background: useColorModeValue("gray.600", "gray.700")
            }}
          />
          </Tooltip>
            <Input
            as={EditableInput}
            onChange={handleEdit}
            />
            <EditableControls/>
          </Editable>
          </Flex> */}
          </VStack>
          {/* <Image src={imageSrc} alt={alt} objectFit='cover' borderRadius="xl" height='100%' width='100%'/> */}
        </CardBody>
      </Card>
      <Flex gap='4' justifyContent='center'>
             <Button m='2' className='edit-btn'>Edit</Button>
             <Button m='2' onClick={() => deleteData(id)} className='edit-btn'>Remove</Button>
        </Flex>
      </Box>
    )
}
export default ModelCard;
