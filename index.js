const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())


let persons = [
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

app.get('/api/persons/:id', (req, res) => {
    const person = persons.find(p => p.id === Number(req.params.id))
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    persons = persons.filter(p => p.id !== Number(req.params.id))
    res.status(204).end()
})

app.get('/api/info', (req, res) => {
    infoString = `Phonebook has info for ${persons.length} people\n\n${new Date}`
    res.setHeader('content-type', 'text/plain')
    res.send((infoString))
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})