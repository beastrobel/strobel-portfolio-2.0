import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormControl, FormLabel, Center, Button, Box, Container, Input, Heading } from '@chakra-ui/react'

const Login = () => (
    
    <Container maxWidth="md" my="50px" py="100px">
      <Heading fontSize="32px">Password Protected Page</Heading>
      <Formik
        initialValues={{ password: '' }}
        validate={values => {
          const errors = {};
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password != 'UX') {
            errors.password = 'Invalid password';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl>
            <FormLabel>Password</FormLabel>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" /><br/><br/>
            <Button bgColor="black" color="white" _hover={{bgColor:"gray.500"}} type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Container>
    
  );
  
  export default Login;