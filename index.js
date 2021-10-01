console.log('Well, hello there my little friend!')
require('dotenv').config()
const Person = require('./models/person')

const { response, application } = require('express')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { prependOnceListener } = require('./models/person')
morgan.token('object', function getObject(req) {
    if(req.method === 'POST')
    return JSON.stringify(req.body);
})
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json( { error: error.message })
    }
    next(error)
  }

const app = express()
const PORT = process.env.PORT
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :object'))
app.use(errorHandler)

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })

    app.get('/info', (req, res, next) => {
            Person.find({}).then(persons => {
               const amount = persons.length
               res.send(`<div><p>Phonebook has info for ${amount} people</p><p>${new Date()}</p></div>`)
            })
            .catch(error => next(error))
           

    })

    app.get('/api/persons', (req, res, next) => {
        Person.find({}).then(persons => {
            res.json(persons)
        })
        .catch(error => next(error))
    })

    app.get('/api/persons/:id', (req, res, next) => {
        Person.findById(req.params.id).then(person => {
            if(person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
    })

    app.delete('/api/persons/:id', (req, res, next) => {
        Person.findByIdAndRemove(req.params.id)
            .then(result => {
                res.status(204).end()
            })
            .catch(error => next(error))
    })
      
    app.post('/api/persons', (req, res, next) => {
        const body = req.body;

        if(body.name === undefined) {
            return res.status(400).json({error: 'content missing'})
        }

        const person = new Person({
            name: body.name,
            number: body.number || "",
        })

        person.save().then(savedPerson => {
           res.json(savedPerson)
        })
        .catch(error => next(error))
    })

    app.put('/api/persons/:id', (req, res, next) => {
        const body = req.body

        const person = {
            name: body.name,
            number: body.number,
        }

        Person.findByIdAndUpdate(req.params.id, person, {new: true})
            .then(updatedPerson => {
                res.json(updatedPerson)
            })
            .catch(error => next(error))
    })
