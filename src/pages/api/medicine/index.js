import nc from 'next-connect'
import medicine from '../../../data/medicine'

const handler = nc().get((req, res) => {
  res.json({
    data: medicine,
  })
})

export default handler
