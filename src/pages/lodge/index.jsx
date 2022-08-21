import React from 'react'

const Lodge = (lodge) => (
  <div>
    <h1>{lodge.data.title}</h1>
    <div>
      {lodge.data.paragraphs.map((p, i) => {
        return (<p key={i}>{p}</p>)
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
