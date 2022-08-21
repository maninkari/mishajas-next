import React from 'react'

const Lodge = () => (
  <div>
    <h1>Lodge</h1>
  </div>
)

export async function getStaticPaths({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/lodge`)
  const programs = await response.json()
  const paths = programs.data.map((p) => ({ params: { id: p.id } }))

  console.log('paths')
  console.log({ paths })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/lodge/${params.id}`)
  const program = await res.json()
  return { props: program.data }
}

export default Lodge
