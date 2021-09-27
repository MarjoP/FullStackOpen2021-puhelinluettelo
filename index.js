console.log('Well, hello there my little friend!')
const { response } = require('express')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
morgan.token('object', function getObject(req) {
    if(req.method === 'POST')
    return JSON.stringify(req.body);
})

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :object'))

let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]


    app.get('/api/persons', (req, res) => {
        res.json(persons)
    })

    app.get('/info', (req, res) => {
        const amount = persons.length;
        const timeNow = new Date();

        res.send(
            `<div><p>Phonebook has info for ${persons.length} people</p><p>${timeNow}</p></div>`
        )
    })

    app.get('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id)
        const person = persons.find(person => person.id === id)
        if(person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })

    app.delete('/api/persons/:id', (req, res) => {
        const id = Number(req.params.id)
        persons = persons.filter(person => person.id !== id)
        res.status(204).end()
    })
      
    app.post('/api/persons', (req, res) => {
        const body = req.body;
        if(!body.name || !body.number) {
            return res.status(400).json({
                error: 'name or number missing'
            })
        }
        if(persons.find(person => person.name.toLocaleLowerCase() === body.name.toLocaleLowerCase())) {
            return res.status(409).json({
                error: 'name must be unique'
            })
        }

    const person = {
        name: body.name,
        number: body.number || "",
        id: generateId(),
    }

    persons = persons.concat(person);
    res.json(person)
    })

    const generateId = () => {
        const maxId = persons.length >0 ? Math.max(...persons.map(n => n.id)) : 0;
        return maxId +1;
    }

    const PORT = process.env.PORT || 3001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)