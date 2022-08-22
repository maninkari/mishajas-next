import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import Link from 'next/link'

const Programs = (props) => (
  <div>
    <h1>Programs</h1>
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
    rounded="lg" 
    overflow="hidden" 
    p="6" 
    borderColor="gray.200" 
    borderRadius='1em' 
    border="solid"
    m="3"
    justify={{ base: "center" }}
    direction={{ base: "column", md: "row" }}
    >
      <Box minW="320px" w="320px" h="220px" bg="gray" mr="1em">img</Box>
      <Box>
        <h2>{p.name}</h2>
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
