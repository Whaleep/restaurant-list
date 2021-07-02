const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
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

module.exports = router
