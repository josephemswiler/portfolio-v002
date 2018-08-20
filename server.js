const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Serve static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')) //build
}

// Add API and view routes
app.use(routes)

// Connect to DB
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/portfolio-v002'
// )

// Start the API server
app.listen(PORT, () =>
  console.log(`🚀  API Server now listening on PORT ${PORT}!`)
)
