import React, {useState} from 'react'
import { Button, useToast, IconButton, Input, CloseButton, InputRightElement, Spacer, Text, Checkbox, FormControl, FormLabel, FormErrorMessage, Divider, VStack, Box, Flex, HStack, useDisclosure, InputGroup } from "@chakra-ui/react";
import {Formik, Field} from 'formik'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from 'yup';
import "../App.css";

const Login = ({data}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = useState(false)
  const handlePw = () => setShow(!show)
  const toast = useToast()

  let username = window.localStorage.getItem("lastInput") /* ?? firstName.value */;
  if (username === null || ""){
    username = "creative"
  }
  setInterval(() => {
    window.localStorage.removeItem("lastInput");
  }, 9000);

  return (
    <Flex py={20} height={730} align='center' justify='center'>
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
    border= 'none'
    mt={20}
    boxShadow='dark-lg'
    >
      <VStack alignItems='flex-start' spacing={4}>
      <HStack justifyItems='space-between' width='100%'>
      <h2>Log in</h2>
      <Spacer/>
      <CloseButton size='md' /* ml={260} */
      as='a'
      href='/'
      variant='ghost'
      aria-label='Close icon'
      />
      </HStack>
      <HStack>
        <Text>No account yet?</Text>
        <Text as='a' color='blue' href="signup" cursor='pointer'>Sign up!</Text>
      </HStack>
      <Spacer/>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        onSubmit={(values,{resetForm}) => {
          /* alert(JSON.stringify(values, null, 2)); */
          toast({
            title: `Hello ${username} !`,
            description: "It's nice to see you back.",
            status: 'success',
            duration: 7000,
            isClosable: true,
            position: 'top'
          })
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
                  placeholder='Email address'
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
                  placeholder='Password'
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
                alignSelf="center"
                >
                  Remember me?
                </Field>
                <Text as='a' href='/verify' cursor='pointer' color='blue' fontWeight='medium' fontSize={16}>Forgotten password?</Text>
                </HStack>
                <Button id="login-btn2" type="submit" width="full" boxShadow='dark-lg' justifySelf="center" fontWeight='bold' fontSize={18} size={['sm','md','lg']} rounded='15px' bg='blue' color='#fff' _hover={{bg:'mediumblue'}}>
                  Login
                </Button>
              </VStack>
            </form>
          )}
          </Formik>
          <Spacer/>
          </VStack>
          <Divider pb={1} color='#ccc' opacity={0.25}/>
          <VStack spacing={4} pt={1} align='center' justify='center'>
          <Text align='center' justify='center'>or sign in with</Text>
          <HStack gap={2}>
              {data.map((acct) =>(
                <a key={acct.url} href={acct.url} rel='navicons'>
                  <FontAwesomeIcon className='link2' icon={acct.icon} color='black' size="2x"/>
                </a>
              ))}
            </HStack>
          </VStack>
      </Box>
    </Flex>
  )
}

export default Login;