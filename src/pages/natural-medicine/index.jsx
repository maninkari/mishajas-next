import React from 'react'

const Medicine = (medicine) => (
  <div>
    <h1>Natural Medicine</h1>
    <h2>Hollistic Wellbeing and Tradition</h2>
    <div>
      {medicine.data.paragraphs.map((p, i) => {
        return <p key={i}>{p}</p>
      })}
    </div>
  </div>
)

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/medicine`)
  const medicine = await res.json()
  return { props: medicine }
}

export default Medicine
