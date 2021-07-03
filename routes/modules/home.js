const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants, sort: "_id"}))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
  const keyword = new RegExp(req.query.keyword.trim(), 'i')
  const sortList = {
    "_id": { _id: 'asc' },
    "nameAsc": { name_en: 'asc' },
    "nameDesc": { name_en: 'desc' },
    "category": { category: 'asc' },
    "location": { location: 'asc' },
    "rating": { rating: 'desc' }
  }
  Restaurant.find({ $or: [{ name: keyword }, { category: keyword }] })
    .lean()
    .sort(sortList[req.query.sort])
    .then(function (restaurants) {
      if (restaurants.length > 0) {
        res.render('index', { restaurants: restaurants, query: req.query })
      } else {
        res.render('index', { no_result: '<h3>搜尋沒有結果</h3>', query: req.query })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
