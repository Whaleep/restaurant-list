// require package used in the project
const express = require('express')
const app = express()
const port = 3000
const Restaurant = require('./models/restaurant')
// mongoose
const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/restaurant-list'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// require handlebars in the project
const exphbs = require('express-handlebars')
//const restaurantList = require('./restaurant.json')

// experess template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

// setting static files
app.use(express.static('static'))

// routes setting
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// querystring
app.get('/search', (req, res) => {
  const keyword = new RegExp(req.query.keyword.trim(), 'i')
  Restaurant.find({ $or: [{ name: keyword }, { category: keyword }] })
    .lean()
    .then(function (restaurants) {
      if (restaurants.length > 0) {
        res.render('index', { restaurants: restaurants, keyword: req.query.keyword.trim() })
      } else {
        res.render('index', { keyword: req.query.keyword, no_result: '<h3>搜尋沒有結果</h3>' })
      }
    })
      .catch(error => console.log(error))
})

// create
app.get('/reataurants/new', (req, res) => {
  return res.render('new')
})

app.post('/restaurants/', (req, res) => {
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// detail
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// edit
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

app.post('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => {
      Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

//delete
app.post('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
