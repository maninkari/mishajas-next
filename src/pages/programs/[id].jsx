import React from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Heading } from '@chakra-ui/react'

const Program = (program) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Box>
      <Heading size="md">{program.name}</Heading>
      <p>{program.price}</p>
      {/* <p>{program.img}</p> */}

      <Flex
        minW="m"
        borderWidth="1px"
        overflow="hidden"
        borderColor="lightgray"
        // border="solid"
        mt="3"
        justify={{ base: 'center' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box minW="320px" w="320px" h="220px" bg="gray" mr="1em">
          img
        </Box>
        {/* <p>{program.id}</p>
        <p>{program.shortdesc}</p> */}
        <div>
          {program.itinerary.map((d) => {
            return day(d)
          })}
        </div>
      </Flex>
    </Box>
  )
}

const day = (d) => {
  return (
    <Box key={d.day} pb="1em">
      <Heading size="md" as="h3">
        {d.day}
      </Heading>
      <div>
        {d.actividades.map((a, i) => {
          return actividad(a, i)
        })}
      </div>
    </Box>
  )
}

const actividad = (a, i) => {
  return (
    <div key={i}>
      {/* <b>{a.actividad}</b> */}
      {a.descripcion.length > a.actividad.length ||
      a.descripcion.split(' ').length > 1 ? (
        <p>{a.descripcion}</p>
      ) : (
        <b>{a.descripcion}</b>
      )}
    </div>
  )
}

export async function getStaticPaths({ params, req, res }) {
  // console.log(params)
  const response = await fetch(`http://localhost:3000/api/program`)
  const programs = await response.json()
  const paths = programs.data.map((p) => ({ params: { id: p.id } }))

  // console.log('paths')
  // console.log({ paths })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/program/${params.id}`)
  const program = await res.json()
  return { props: program.data }
}

export default Program
