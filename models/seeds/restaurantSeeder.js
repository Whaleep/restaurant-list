const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')

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
  Restaurant.create(restaurantList.results)
  console.log('done.')
})
