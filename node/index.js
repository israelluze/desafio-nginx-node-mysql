const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {    
  
    connection.query(`INSERT INTO people (name) VALUES ('Israel Moreira')`)
  
    connection.query(`SELECT name FROM people`, (error, results, fields) => {
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${!!results.length ? results.map(x => `<li>${x.name}</li>`).join('') : ''}
        </ol>
      `)
    })
  })

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})