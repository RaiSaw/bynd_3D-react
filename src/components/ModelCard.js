import { Box, Tooltip, IconButton, Text, VStack, CardBody, Card, Button, useColorModeValue, Flex, ButtonGroup, useEditableControls, EditablePreview, Editable, EditableInput, Input, Select, useDisclosure, FormLabel, ModalOverlay, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, ModalFooter } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React, {useRef} from "react";
import {motion} from 'framer-motion'
import { defineStyle } from '@chakra-ui/react'
import { modelTypes } from "../Pages/Gallery";
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

const ModelCard = ({ title, imgUrl, type, deleteData, id, handleChangeTitle, editData, handleSubmit, handleInput, edited, setEdited, EditPost }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
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
        id={id}
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
            <Input
            as={EditableInput}
            name='title'
            id='title'
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
          <EditableInput
          as={Select}
          name='type'
          id='type'
          >
            {modelTypes.map((opt) =>(
              <option key={opt.id}>{opt.type}</option>
            ))}
          </EditableInput>
            <EditableControls/>
          </Editable>
          </Flex>
          </VStack>
          {/* <Image src={imageSrc} alt={alt} objectFit='cover' borderRadius="xl" height='100%' width='100%'/> */}
        </CardBody>
        </Card>
        <Flex gap='4' justifyContent='center'>
          <Button className='edit-btn' m='2' onClick={onOpen}>Edit</Button>
          <Button className='edit-btn' m='2' onClick={() => deleteData(id)}>Remove</Button>
        </Flex>
        <Modal
        isCentered
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false} /* scroll body even not in focus */
        /* closeOnOverlayClick={true} */
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit model</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input id="title" type="text" name="title" ref={initialRef} defaultValue={title}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Type</FormLabel>
              <Select id="type" type="type" name="type" defaultValue={type}>
              {modelTypes.map((type) => (
                <option key={type.id}>{type.type}</option>
              ))}
            </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button id="signup-btn" mr={3}>
              Save
            </Button>
            <Button className="edit-btn"onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    )
}
export default ModelCard;
