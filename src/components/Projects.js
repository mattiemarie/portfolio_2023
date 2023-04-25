import React from 'react';
import { Card, CardBody, CardFooter, Text, Image, Stack, Heading } from '@chakra-ui/react'

function Projects() {
  return (
    <div>
    
    {/* Project 1 */}
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Project #1</Heading>
        <Text>
          This is where the project description will go.
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
    </CardFooter>
    </Card>

    {/* Project 2 */}
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Project #1</Heading>
        <Text>
          This is where the project description will go.
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
    </CardFooter>
    </Card>

    {/* Project 3 */}
    <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Project #1</Heading>
        <Text>
          This is where the project description will go.
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
    </CardFooter>
    </Card> 
  </div>
  );
}

export default Projects;
