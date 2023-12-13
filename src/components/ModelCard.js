import { Text, VStack, CardBody, Card, Button, useColorModeValue, Flex, ButtonGroup, useEditableControls, Label, EditablePreview, Editable, EditableInput, Input } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon, } from '@chakra-ui/icons'
import React from "react";
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
    <ButtonGroup justifyContent='center' size='sm'>
      <Button rightIcon={<CheckIcon />} {...getSubmitButtonProps()} >Save</Button>
      <Button rightIcon={<CloseIcon />} {...getCancelButtonProps()} >Cancel</Button>
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
          {/* <Button
          className='card-btn'
          variant='ghost'
          sx={style}
          >
            Remove
          </Button> */}
    </Flex>
  )
}

const ModelCard = ({ title, imgUrl, type }) => {

    return(
        <Card
        /* className="img-3d" */
        borderRadius='none'
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
          <VStack pt={12} px='4' alignItems='flex-start' color='white' h='100%' justifyContent='flex-end'>
          <Flex gap='2' fontSize={['8','10','12']}>
          <Text>Title:</Text>
          <Editable
          defaultValue={title}
          /* isPreviewFocusable={false} */
          fontSize='md'
          isPreviewFocusable={true}
          selectAllOnFocus={true}
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
          <Flex gap='2' fontSize={['8','9','11']}>
          <Text>Type:</Text>
          <Editable
          isPreviewFocusable={true}
          selectAllOnFocus={true}
          defaultValue={type}
          fontSize='md'
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
      </Card>
    )
}
export default ModelCard;
