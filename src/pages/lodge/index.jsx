import React from 'react'

const Lodge = () => (
  <div>
    <h1>Lodge</h1>
  </div>
)

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/lodge`)
  const lodge = await res.json()
  return { props: lodge }
}

export default Lodge
