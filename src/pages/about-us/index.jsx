import React from 'react'
import { Stack, Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

const mishajas = [
  'José Mishaja',
  'Honorato Mishaja',
  'Oscar Mishaja Salazar',
  'Armando Mishaja Salazar',
  'Jose Mishaja Escobedo',
  'Dayiro Mishaja Pesha',
  'Gissel Mishaja Pesha',
  'Fernando Mishaja Condari',
  'Adriana Mishaja Condori',
  'Maryori Mishaja Calsin',
  'Maryuri Mishaja Calsin',
  'Alexia Mishaja Calsin',
  'Nurian Mishaja Quispe',
  'Fabricio Mishaja Quispe',
  'José Mishaja Salazar',
  'Pablo Mishaja Moncada',
  'Miuri Mishaja Moncada',
  'Ronal Mishaja Salazar',
]

const AbouttUs = () => (
  <div>
    <Box
      bg="gray"
      minH={{ md: '300px', base: '150px' }}
      marginBottom="1em"
      bgImage="url(http://www.mishaja.org/imgs/mishajas.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box float={'right'} marginRight="2em" color="white">
        <Center h={{ md: '300px', base: '150px' }}>
          {/* <Heading size="md">The Mishaja</Heading> */}
          <Box w="350px" display={{ base: 'none', md: 'block' }} color="white">
            {mishajas.map((m, i) => {
              return <span key={i}>{m} ~ </span>
            })}
          </Box>
        </Center>
      </Box>
    </Box>
    {/* <Stack direction={{ base: 'column', md: 'row' }}>
      <Box w={{ md: '33%' }}>
        <Heading size="md">The Enashawa Lodge</Heading>
        <p>
          This family project located within the native community of Infierno on
          the Tambopata River, consists of four bungalows near of the Ese-eja
          native community's private reserve and it was created to protect the
          rainforest ecosystem and promote the development of the local
          community.
        </p>
      </Box>
      <Box w={{ md: '33%' }}>
        <Heading size="md">Natural Medicine</Heading>
        <p>
          With some of the more renowned chamans from the Ese-eja native
          community of Infierno, the Mishaja family has been treating patients
          with Ayahuasca and other traditional plants. Used for more than 5000
          years by the traditional healers to treat diseases and for spiritual
          enlightenment, the Ayahuasca is considered the master plant of the
          Amazon rainforest.
        </p>
      </Box>
      <Box w={{ md: '33%' }}>
        <Heading size="md">Our Programs</Heading>
        <p>
          Take a look to our 4D/3N and 3D/2N programs and extra activities like
          Ayahuasca sessions and piranha fishing.
        </p>
      </Box>
    </Stack> */}
  </div>
)

export default AbouttUs
