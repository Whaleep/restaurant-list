const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  Restaurant.create(restaurantList.results)
    .then(() => {
      console.log('done.')
      return db.close()
    })
})
