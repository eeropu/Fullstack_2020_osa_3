const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())


persons = [
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 5
    }
]


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})