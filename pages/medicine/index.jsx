import React from 'react'

const Medicine = (props) => (
  <div>
    <h1>Medicine</h1>
    <div>
      {props.data.sections.map((p) => {
        return panel(p)
      })}
    </div>
    <div>{JSON.stringify(props.data)}</div>
  </div>
)

const panel = (p) => {
  return (
    <a>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
    </a>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/medicine`)
  const content = await res.json()
  return { props: content }
}

export default Medicine
