import React from 'react'

const Home = (props) => (
  <div>
    <h1>Home</h1>
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
      <h3>{p.title}</h3>
      <p>{p.description}</p>
    </a>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/home`)
  const content = await res.json()
  return { props: content }
}

export default Home
