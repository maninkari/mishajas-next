import nc from 'next-connect'
import programs from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.json({ data: programs })
  })
  .post((req, res) => {
    const id = Date.now()
    const note = { ...req.body, id }

    programs.push(note)
    res.json({ data: program })
  })

export default handler
