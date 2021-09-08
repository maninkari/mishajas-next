import React from 'react'

const Lodge = (props) => (
  <div>
    <h1>Lodge</h1>
    <div>{JSON.stringify(props.data)}</div>
  </div>
)

// const Home = (props) => (
//   <div>
//     <h1>Home</h1>
//     <div>
//       {props.data.sections.map((p) => {
//         return panel(p)
//       })}
//     </div>
//   </div>
// )

// const panel = (p) => {
//   return (
//     <a>
//       <h3>{p.title}</h3>
//       <p>{p.description}</p>
//     </a>
//   )
// }

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/lodge`)
  const content = await res.json()
  return { props: content }
}

export default Lodge
