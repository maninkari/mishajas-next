import React from 'react'

const Programs = (props) => (
  <div>
    <h1>Programs</h1>
    <div>
      {props.data.map((p) => {
        return programshort(p)
      })}
    </div>
  </div>
)

function programshort(p) {
  return (
    <div>
      <h2>{p.name}</h2>
      <p>{p.id}</p>
      <p>{p.shortdesc}</p>
      <p>{p.price}</p>
      <p>{p.img}</p>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/program`)
  const programs = await res.json()
  return { props: programs }
}

export default Programs
