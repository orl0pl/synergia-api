const express = require('express')
const app = express()
const port = 3000
const Librus = require('librus-api')
let client = new Librus();
app.get('/accoutments', (req, res) => {
      client.authorize(req.query.login, req.query.pass).then(
        client.inbox.listAnnouncements().then(data => {res.send(data)})
      )
      })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})