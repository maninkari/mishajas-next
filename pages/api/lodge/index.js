import nc from 'next-connect'
import content from '../../../src/data/lodge/sections'

const handler = nc().get((req, res) => {
  res.json({
    data: content,
  })
})

export default handler
