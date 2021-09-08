import nc from 'next-connect'
import programs from '../../../src/data/programs/data'

const getProgram = (id) => programs.find((n) => n.id === id)

const handler = nc().get((req, res) => {
  const program = getProgram(req.query.id)

  if (!program) {
    res.status(404)
    res.end()
    return
  }

  console.log(program)

  res.json({ data: program })
})

export default handler
