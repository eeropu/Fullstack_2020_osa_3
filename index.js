require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

//Tehtävä 3.11
app.use(express.static('build'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

// Models
const Person = require('./models/person')

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

const generateId = () => {
    /*const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id))
        : 0
    return maxId + 1*/
    return Math.floor(Math.random() * 10000000)
}

const validatePerson = (person) => {
    if (!person.name) {
        return `person's name can't be empty`
    } else if (!person.number) {
        return `person's number can't be empty`
    } else if (persons.find(p => p.name === person.name)) {
        return `person with the given name "${person.name}" has already been added`
    }
    return undefined
}

app.get('/api/persons', (req, res, next) => {
    Person.find({}).then(response => {
        res.json(response.map(person => person.toJSON()))
    })
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    /*const error = validatePerson(body)
    if (error) {
        res.status(400).json({error})
    } else {
        const person = {
            name: body.name,
            number: body.number,
            id: generateId()
        }
        persons.push(person)
        res.json(person)
    }*/

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(result => {
            console.log(result)
            res.json(result)
        }).catch(error => next(error))
})


app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if(person) {
                console.log(person)
                res.json(person.toJSON())
            } else {
                next(person)
            }
        }).catch(error => next(error))
})


app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        }).catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body

    const update = {
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, update, { new: true })
        .then(updatedPerson => {
            console.log(updatedPerson)
            res.json(updatedPerson.toJSON())
        }).catch(error => next(error))
})

app.get('/api/info', (req, res, next) => {
    Person.count().then(count => {
        infoString = `Phonebook has info for ${count} people\n\n${new Date}`
        res.setHeader('content-type', 'text/plain')
        res.send((infoString))
    }).catch(error => next(error))
})

// Error handlers -------------------------------------------------------------

const notFoundHandler = (error, req, res, next) => {
    if ( error.name === 'CastError' && error.kind === 'ObjectId' ) {
        return res.status(404).end()
    }
    next(error)
}

app.use(notFoundHandler)

const validationErrorHandler = (error, req, res, next) => {
    if ( error.name = "ValidationError" ) {
        return res.status(400).send(error.message)
    }
    next(error)
}

app.use(validationErrorHandler)

const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    return res.status(500).send({ error: 'Something went wrong'})
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})