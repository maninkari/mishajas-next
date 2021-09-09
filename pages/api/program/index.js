import nc from 'next-connect'
import programs from '../../../src/data/programs/data'
import content from '../../../src/data/programs/sections'

const handler = nc().get((req, res) => {
  let programs_short = programs.map((p) => {
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      img: p.img,
      shortdesc: p.shortdesc,
    }
  })

  let data = content

  data.sections.forEach((e) => {
    if (e.programs) {
      e.programs = programs_short
    }
  })

  res.json({
    data,
  })
})

export default handler
