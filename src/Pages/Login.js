import React, {useState} from 'react'
import { Button, useToast, IconButton, Input, CloseButton, InputRightElement, Spacer, Heading, Text, Checkbox, DrawerOverlay, FormControl, FormLabel, FormErrorMessage, Divider, VStack, Box, Flex, HStack, useDisclosure, Drawer, DrawerContent, InputGroup } from "@chakra-ui/react";
import {Formik, Field} from 'formik'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faYahoo
} from "@fortawesome/free-brands-svg-icons"
import * as Yup from 'yup';

const accts = [
  {
    icon: faGoogle,
    url: "https://www.google.com",
  },
  {
    icon: faFacebook,
    url: "https://facebook.com",
  },
  {
    icon: faYahoo,
    url: "https://yahoo.com",
  }
]
const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false)
  const handlePw = () => setShow(!show)
  const toast = useToast()
  return (
    <Flex py={20} height={730} align='center' justify='center' bg='#FBDCC4'>
    <Box
        className='login'
        as='section'
        color="#333"
        maxWidth="1280px"
        left={0}
        right={0}
        p={12}
        bg='white'
        rounded='xl'
        w={500}
        border= '1px solid #7D0633'
        mt={20}
        boxShadow='dark-lg'
        >
        <VStack alignItems='flex-start' spacing={4}>
        <Flex justify='space-between'>
        <Heading fontWeight='bold' color='#7D0633'>Log in</Heading>
        <Spacer/>
        <CloseButton size='md' ml={260}
        as='a'
        href='/'
        variant='ghost'
        aria-label='Close icon'
        />
        </Flex>
        <HStack>
          <Text>No account yet?</Text>
          <Text as='a' color='blue.500' onClick={onOpen} cursor='pointer'>Sign up!</Text>
        </HStack>
        <Spacer/>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        onSubmit={(values,{resetForm}) => {
          alert(JSON.stringify(values, null, 2));
          resetForm()
        }}
        validationSchema= {Yup.object({
          email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
          password: Yup.string().required('Please enter your password').min(8,'Password must contain at least 8 characters')
        })}
        >
          {({handleSubmit, errors, touched}) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align='flex-start'>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  placeholder='Type your email'
                  /*required
                  validate={(value) => {
                    let error;
                    if (value==''){
                      error = 'Please enter a valid email.'
                    }
                    return error;
                  }}*/
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <InputGroup>
                  <Field
                  as={Input}
                  id="password"
                  name="password"
                  type={show ? 'text' : 'password'}
                  variant="filled"
                  placeholder='Type your password'
                  /*validate={(value) => {
                    let error;
                    if (value.length < 6) {
                      error = "Password must contain at least 8 characters";
                    }
                    return error;
                  }}*/
                  />
                  <InputRightElement>
                  <IconButton
                  aria-label='View password icon'
                  onClick={handlePw}
                  size='sm'
                  variant='ghost'
                  >
                    {show ? <ViewOffIcon/>:<ViewIcon/>}
                  </IconButton>
                  </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <HStack>
                <Field
                as={Checkbox}
                id="rememberMe"
                name="rememberMe"
                >
                  Remember me?
                </Field>
                <Text as='a' href='/verify' cursor='pointer' color='blue.500' fontFamily={'Karla'} fontWeight='medium' fontSize={16}>Forgotten password?</Text>
                </HStack>
                <Spacer/>
                <Button type="submit" width="full" boxShadow='dark-lg' fontFamily={'Markazi Text'} justifySelf="center" fontWeight='bold' fontSize={18} size={['sm','md','lg']} bg='#7D0633' color='#FBDCC4' rounded='15px' _hover={{bg:'#F2A07B', textColor:'#7D0633'}}>
                  Login
                </Button>
              </VStack>
            </form>
          )}
          </Formik>
          <Spacer/>
          </VStack>
          <Divider py={2}/>
          <VStack spacing={4} align='center' justify='center'>
          <Text align='center' justify='center'>or sign in with</Text>
          <HStack gap={2}>
              {accts.map((acct) =>(
                <a key={acct.url} href={acct.url} rel='navicons'>
                  <FontAwesomeIcon  className='link2' icon={acct.icon} color='black' size="2x"/>
                </a>
              ))}
            </HStack>
          </VStack>
            <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement='top'
            closeOnOverlayClick={false}
            size='full'
            blockScrollOnMount={false}
            maxWidth='1280px'
            >
            <DrawerOverlay />
            <DrawerContent>
            <Flex py={20} width='full' height={780} align='center' justify='center' bg='#FBDCC4'>
            <Box
            className='signin'
            as='section'
            color="#333"
            maxWidth="1280px"
            left={0}
            right={0}
            p={12}
            bg='white'
            rounded='xl'
            w='500'
            border= '1px solid #7D0633'
            boxShadow='dark-lg'
            >
            <VStack alignItems='flex-start' spacing={4}>
            <Flex align='space-between'>
            <Heading fontWeight='bold' color='#7D0633'>Sign up</Heading>
            <Spacer/>
            <CloseButton size='md' ml={260}
            as='a'
            href='/login'
            variant='ghost'
            aria-label='Close icon'
            />
            </Flex>
            <HStack>
            <Text>Already have an account?</Text>
            <Text as='a' href='/login' color='blue.500' cursor='pointer'>Sign in!</Text>
            </HStack>
        <Spacer/>
            <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        onSubmit={({resetForm}) => {
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top'
          })
          resetForm()
        }}
        validationSchema= {Yup.object({
          email: Yup.string().required('Please enter your email').email('Please enter a valid email'),
          password: Yup.string().required('Please enter your password').min(8,'Password must contain at least 8 characters')
        })}
        >
          {({handleSubmit, errors, touched}) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align='flex-start'>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  placeholder='Type your email'
                  />
                  <FormErrorMessage >{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <InputGroup>
                  <Field
                  as={Input}
                  id="password"
                  name="password"
                  type={show ? 'text' : 'password'}
                  variant="filled"
                  placeholder='Type your password'
                  /*validate={(value) => {
                    let error;

                    if (value.length < 6) {
                      error = "Password must contain at least 8 characters";
                    }
                    return error;
                  }}*/
                  />
                  <InputRightElement>
                  <IconButton
                  aria-label='View password icon'
                  onClick={handlePw}
                  size='sm'
                  variant='ghost'
                  >
                    {show ? <ViewOffIcon/>:<ViewIcon/>}
                  </IconButton>
                  </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <HStack gap={4}>
                <Field
                as={Checkbox}
                id="rememberMe"
                name="rememberMe"
                >
                  Remember me?
                </Field>
                </HStack>
                <Spacer/>
                <Button type="submit" width="full" boxShadow='dark-lg' fontFamily={'Markazi Text'} justifySelf="center" fontWeight='bold' fontSize={18} size={['sm','md','lg']} bg='#7D0633' color='#FBDCC4' rounded='15px' _hover={{bg:'#F2A07B', textColor:'#7D0633'}}>
                  Sign up
                </Button>
              </VStack>
            </form>
          )}
          </Formik>
          <Spacer/>
          </VStack>
          <Divider py={2}/>
          <VStack spacing={4} align='center' justify='center'>
          <Text align='center' justify='center'>or sign up with</Text>
          <HStack gap={2}>
              {accts.map((acct) =>(
                <a key={acct.url} href={acct.url} rel='navicons'>
                  <FontAwesomeIcon  className='link2' icon={acct.icon} color='black' size="2x"/>
                </a>
              ))}
            </HStack>
          </VStack>
            </Box>
            </Flex>
            </DrawerContent>
            </Drawer>
      </Box>
    </Flex>
  )
}

export default Login;