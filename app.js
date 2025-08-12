const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('<h1>Welcome to your ASCPC web app!</h1><br><div>Here is an update to test</div>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
