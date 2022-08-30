import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'

const Lodge = (lodge) => (
  <div>
    <Box bg="gray" minH="300px">
      <Box float={'right'}>
        <Center h="300px">
          <Heading size="md">Enashawa</Heading>
        </Center>
      </Box>
    </Box>
    <Heading size="md">{lodge.data.title}</Heading>
    <div>
      {lodge.data.paragraphs.map((p, i) => {
        return <p key={i}>{p}</p>
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
