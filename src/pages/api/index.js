import nc from 'next-connect'

const handler = nc()
  .get(async (req, res) => {
    res.json({ message: 'ok' })
  })
  .post((req, res) => {
    res.json({ message: 'posted' })
  })

export default handler
