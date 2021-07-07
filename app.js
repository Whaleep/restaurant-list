// require package used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')
const app = express()
const port = 3000

// experess template engine
const isEqual = require('./controller/handlebarsHelpers')
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: { isEqual }
}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)
app.use(express.static('public'))

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
