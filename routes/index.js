const path = require('path')
const router = require('express').Router()
// const apiRoutes = require('./api')

// If API Routes
// router.use('/api', apiRoutes)

// Else send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html')) //build
})

module.exports = router
