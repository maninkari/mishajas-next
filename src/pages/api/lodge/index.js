import nc from 'next-connect'
import lodge from '../../../data/lodge'

const handler = nc()
  .get((req, res) => {
    res.json({
      data: lodge
    })
  })

export default handler
