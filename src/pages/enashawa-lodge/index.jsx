import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'

const Lodge = (lodge) => (
  <div>
    <Box bg="gray" minH={{ md: '300px', base: '150px' }} marginBottom="1em">
      <Box float={'right'} marginRight="2em">
        <Center h={{ md: '300px', base: '150px' }}>
          <Heading size="md">Enashawa</Heading>
        </Center>
      </Box>
    </Box>
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
  </div>
)

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/lodge`)
  const lodge = await res.json()
  return { props: lodge }
}

export default Lodge
