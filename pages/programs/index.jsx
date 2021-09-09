import React from 'react'

const Programs = (props) => (
  <div>
    <div>
      {props.data.sections.map((p) => {
        return panel(p)
      })}
    </div>
  </div>
)

const panel = (p) => {
  return (
    <a>
      <h1>{p.title}</h1>
      <p>{p.asterisk}</p>
      <p>{p.description}</p>
      <div>
        {p.programs
          ? p.programs.map((prog) => {
              return programshort(prog)
            })
          : ''}
      </div>
    </a>
  )
}

const programshort = (p) => {
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
