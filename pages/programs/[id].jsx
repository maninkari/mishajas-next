import React from 'react'
import { useRouter } from 'next/router'

const Program = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Program {id}</h1>
    </div>
  )
}

export default Program
