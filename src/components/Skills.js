import React from 'react';
import { Card, CardBody, Text, Stack} from '@chakra-ui/react'


function Skills() {
  return (
    <div className='container'>
      {/* Heading of Section -- Skills */}
      <div className='heading-container'>
        <h1>Skills</h1>
      </div>
      
      <div className='skill-container'>
          {/* Skill 1 */}
          <Card className='skill-card' maxW='200px'>
            <CardBody className='skill-card-body'>
              <Stack  spacing='3'>
                <Text className='skill-card-text'>React</Text>
              </Stack>
            </CardBody>
          </Card>

          {/* Skill 2 */}
          <Card className='skill-card' maxW='200px'>
            <CardBody className='skill-card-body'>
              <Stack  spacing='3'>
                <Text className='skill-card-text'>Javascript</Text>
              </Stack>
            </CardBody>
          </Card>

          {/* Skill 3 */}
          <Card className='skill-card' maxW='200px'>
            <CardBody className='skill-card-body'>
              <Stack  spacing='3'>
                <Text className='skill-card-text'>SQL</Text>
              </Stack>
            </CardBody>
          </Card>

          {/* Skill 4 */}
          <Card className='skill-card' maxW='200px'>
            <CardBody className='skill-card-body'>
              <Stack  spacing='3'>
                <Text className='skill-card-text'>CSS</Text>
              </Stack>
            </CardBody>
          </Card>

          {/* Skill 5 */}
          <Card className='skill-card' maxW='200px'>
            <CardBody className='skill-card-body'>
              <Stack  spacing='3'>
                <Text className='skill-card-text'>HTML</Text>
              </Stack>
            </CardBody>
          </Card>

          {/* Skill 6 */}
          <Card className='skill-card' maxW='200px'>
            <CardBody className='skill-card-body'>
              <Stack  spacing='3'>
                <Text className='skill-card-text'>Figma</Text>
              </Stack>
            </CardBody>
          </Card>
      </div>
        
    </div>
  );
}

export default Skills;