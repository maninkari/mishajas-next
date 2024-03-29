import React from 'react'
import { useRouter } from 'next/router'

const Program = (program) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>{program.name}</h1>
      <p>{program.id}</p>
      <p>{program.shortdesc}</p>
      <p>{program.price}</p>
      <p>{program.img}</p>
      <div>
        {program.itinerary.map((d) => {
          return day(d)
        })}
      </div>
    </div>
  )
}

const day = (d) => {
  return (
    <div key={d.day}>
      <h2>{d.day}</h2>
      <div>
        {d.actividades.map((a, i) => {
          return actividad(a, i)
        })}
      </div>
    </div>
  )
}

const actividad = (a, i) => {
  console.log(i)
  return (
    <div key={i}>
      <p>{a.actividad}</p>
      <p>{a.descripcion}</p>
    </div>
  )
}

export async function getStaticPaths({ params, req, res }) {
  console.log(params)
  const response = await fetch(`http://localhost:3000/api/program`)
  const programs = await response.json()
  // console.log('programs')
  // console.log(programs.data)
  const paths = programs.data.map((p) => ({ params: { id: p.id } }))

  console.log('paths')
  console.log({ paths })
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/program/${params.id}`)
  const program = await res.json()
  return { props: program.data }
}

export default Program
