import React from 'react';
import { Card, CardBody, CardFooter, Text, Image, Stack, Heading } from '@chakra-ui/react'
import picklefuzzImage from '../components/images/picklefuzz.jpg';


function Projects() {
  return (
  <div>

    {/* Heading of Section -- Projects */}
    <div className='heading-container'>
      <h1>Projects</h1>
    </div>   
    
    <div className= 'card-container'>

    {/* Project 1 */}
    <a href="https://www.google.com" target="_blank">
      <Card className='card' maxW='sm'>
        <CardBody className='card-body'>
          <Image className='card-image'
            src={picklefuzzImage}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className='card-heading' size='md'>Pickle Fuzz</Heading>
            <Text className='card-text'>
              This is where the project description will go.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </a>

    {/* Project 2 */}
    <a href="https://www.google.com" target="_blank">
      <Card className='card' maxW='sm'>
        <CardBody className='card-body'>
          <Image className='card-image'
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className='card-heading' size='md'>Pickle Fuzz</Heading>
            <Text className='card-text'>
              This is where the project description will go.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </a>

    {/* Project 3 */}
    <a href="https://www.google.com" target="_blank">
      <Card className='card' maxW='sm'>
        <CardBody className='card-body'>
          <Image className='card-image'
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className='card-heading' size='md'>Pickle Fuzz</Heading>
            <Text className='card-text'>
              This is where the project description will go.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </a>
    
    {/* Project 4 */}
    <a href="https://www.google.com" target="_blank">
      <Card className='card' maxW='sm'>
        <CardBody className='card-body'>
          <Image className='card-image'
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className='card-heading' size='md'>Pickle Fuzz</Heading>
            <Text className='card-text'>
              This is where the project description will go.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </a>

    </div>
  </div>
  );
}

export default Projects;
