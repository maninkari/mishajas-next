import React from 'react'
import { Stack, Box, Center, Flex, Heading } from '@chakra-ui/react'

const Medicine = (medicine) => (
  <div>
    <Box>
      <Heading size="md">Hollistic Wellbeing and Tradition</Heading>
      {medicine.data.paragraphs.map((p, i) => {
        return <p key={i}>{p}</p>
      })}
    </Box>
  </div>
)

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/medicine`)
  const medicine = await res.json()
  return { props: medicine }
}

export default Medicine
