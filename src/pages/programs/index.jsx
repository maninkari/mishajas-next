import React from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'
import Link from 'next/link'

const Programs = (props) => (
  <div>
    <Heading size='md'>Programs</Heading>
    <div>
      {props.data.map((p, i) => {
        let url = `/programs/${p.id}`
        return (
          <Link href={url} key={i}>
            <a>{programshort(p)}</a>
          </Link>)
      })}
    </div>
  </div>
)

const programshort = (p) =>  {
  return (
    <Flex minW="m"
    borderWidth="1px" 
    overflow="hidden" 
    // p="6" 
    borderColor="gray.500"
    // border="solid"
    mt="3"
    justify={{ base: "center" }}
    direction={{ base: "column", md: "row" }}
    >
      <Box minW="320px" w="320px" h="220px" bg="gray" mr="1em">img</Box>
      <Box>
        <Heading size='md' as="h3">{p.name}</Heading>
        <p>{p.id}</p>
        <p>{p.shortdesc}</p>
        <p>{p.price}</p>
        <p>{p.img}</p>
      </Box>  
    </Flex> 
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/program`)
  const programs = await res.json()
  return { props: programs }
}

export default Programs
