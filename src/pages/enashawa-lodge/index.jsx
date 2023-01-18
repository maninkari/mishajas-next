import React from 'react'
import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'

const Lodge = (lodge) => (
  <div>
    <Box
      bg="gray"
      minH={{ md: '300px', base: '150px' }}
      marginBottom="1em"
      bgImage="url(http://www.mishaja.org/imgs/lodge.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box float={'right'} marginRight="2em" color="white">
        <Center h={{ md: '300px', base: '150px' }}>
          <Heading size="md">Enashawa</Heading>
        </Center>
      </Box>
    </Box>
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Box w={{ md: '60%' }}>
        <Heading size="md">{lodge.data.title}</Heading>
        <div>
          {lodge.data.paragraphs.map((p, i) => {
            return (
              <Box key={i} marginTop="1em">
                <p>{p}</p>
              </Box>
            )
          })}
        </div>
      </Box>
      <Box w={{ md: '40%' }}>
        <Heading size="md">The Surroundings</Heading>
        <Heading size="md">Our Rooms</Heading>
        <Heading size="md">Our Programs</Heading>
      </Box>
    </Stack>
  </div>
)

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/lodge`)
  const lodge = await res.json()
  return { props: lodge }
}

export default Lodge
