// require package used in the project
const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// experess template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('static'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// querystring
app.get('/search', (req, res) => {
  const restaurants = restaurantList.results.filter(function (restaurant) {
    const keyword = req.query.keyword.trim().toLowerCase()
    return restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
  })

  if (restaurants.length > 0) {
    res.render('index', { restaurants: restaurants, keyword: req.query.keyword.trim() })
  }
  else {
    res.render('index', { keyword: req.query.keyword, no_result: '<h3>搜尋沒有結果</h3>' })
  }

})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(function (restaurant) {
    return restaurant.id.toString() === req.params.restaurant_id
  })
  res.render('show', { restaurant: restaurant })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
