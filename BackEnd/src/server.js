const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const jsonwebtoken = require('jsonwebtoken')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
} catch (error) {
  console.error('Error starting server:', error)
}
