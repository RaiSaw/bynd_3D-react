import { Text, VStack, CardBody, Card, Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import {motion} from 'framer-motion'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import '../App.css'

const style = defineStyle({
  mb: '2',
  borderRadius: 'xl', // remove the border radius
  fontWeight: 'semibold', // change the font weight
  color: 'white',
  fontSize: {
    md: '8',
    lg:'10',
  },
  textShadow: '1px 1px 1px mediumblue',
})

const ModelCard = ({ title, imgUrl, type }) => {
    return(
        <Box id='cont' borderRadius='xl' boxShadow='dark-lg'>
        <Card
        className="img-3d"
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
        px={1}
        pt={8}
        >
        <CardBody pt={12} pb={0}>
          <VStack pt={12} alignItems='flex-start' color='white' h='100%' justifyContent='flex-end'>
            <Text as='h4' fontWeight='semibold' fontSize={['8','10','12']} /* position='absolute' */>{title}</Text>
            <Text as='h6' fontWeight='semibold' fontSize={['8','8','10']}>Creator</Text>
            <Flex gap={1}>
            <Button
            className='card-btn'
            variant='ghost'
            sx={style}
            /* onClick={() => toggleButton()} */
            >
              Edit
            </Button>
            <Button
            className='card-btn'
            variant='ghost'
            sx={style}
            /* onClick={() => toggleButton()} */
            >
              Remove
            </Button>
            </Flex>
          </VStack>

          {/* <Image src={imageSrc} alt={alt} objectFit='cover' borderRadius="xl" height='100%' width='100%'/> */}
        </CardBody>
      </Card>
      </Box>
    )
}
export default ModelCard;
