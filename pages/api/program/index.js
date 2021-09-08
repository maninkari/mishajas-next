import nc from 'next-connect'
import content from '../../../src/data/programs/data'

const handler = nc().get((req, res) => {
  res.json({
    data: content.map((p) => {
      return {
        id: p.id,
        name: p.name,
        price: p.price,
        img: p.img,
        shortdesc: p.shortdesc,
      }
    }),
  })
})

export default handler
