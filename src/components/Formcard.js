import { Text, VStack, CardBody, Card, HStack, Image, CloseButton} from "@chakra-ui/react";
import React from "react";
import {motion} from 'framer-motion';
import React, {useState} from 'react'
import {Formik, Field} from 'formik'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faYahoo
} from "@fortawesome/free-brands-svg-icons"
import * as Yup from 'yup';


const FormCard = ({ title, alt, imageSrc }) => {
    return(
        <Card
        /* borderRadius="xl" */
        as='section'
        className='signup'
        boxShadow='dark-lg'
        left={0}
        right={0}
        w='100%'
        color="#333"
        maxWidth="1280px"
        p={12}
        bg='white'
        rounded='xl'
        /* w='500' */
        /* bg={imageSrc} */
        /* alt={alt} */
        /*whileHover={{
          scale: 1.2,
          transition: { duration: 2 },
        }}*/
        //whileTap={{ scale: 1.5 }}
        //whileDrag={{ scale: 1.2 }}
        //whileFocus={{ scale: 2 }}
        >
        <CardBody>
       {/*  <Flex py={20} width='full' height={780} align='center' justify='center'> */}
       <div className="signup">
          <h2>Sign Up</h2>
          <CloseButton size='md' ml={260}
        as='a'
        href='/'
        variant='ghost'
        aria-label='Close icon'
        />
    </div>
        </CardBody>
      </Card>
    )
}
export default Categories;