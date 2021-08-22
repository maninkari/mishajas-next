import nc from 'next-connect'
import programs from '../../../src/data/data'

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
//   .patch((req, res) => {
//     const note = getNote(req.query.id)

//     if (!note) {
//       res.status(404)
//       res.end()
//       return
//     }

//     const i = notes.findIndex(n => n.id === parseInt(req.query.id))
//     const updated = {...note, ...req.body}

//     notes[i] = updated
//     res.json({data: updated})
//   })
//   .delete((req, res) => {
//     const note = getNote(req.query.id)

//     if (!note) {
//       res.status(404)
//       res.end()
//       return
//     }
//     const i = notes.findIndex(n => n.id === parseInt(req.query.id))

//     notes.splice(i, 1)

//     res.json({data: req.query.id})
//   })

export default handler
