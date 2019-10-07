const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
require('./db/db')
console.log(process.env.MY_SECRET)

const apiRouter = require('./routes/api')
const usersRouter = require('./routes/users')

const app = express()

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/weather', apiRouter)
app.use('/users', usersRouter)

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.use((req, res, next) => {
  next(createError(404))
})

module.exports = app
