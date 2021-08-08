const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

const sortList = {
  _id: {
    value: '_id',
    title: '新增時間',
    mongoose: { _id: 'asc' }
  },
  nameAsc: {
    value: 'nameAsc',
    title: 'A->Z',
    mongoose: { name_en: 'asc' }
  },
  nameDesc: {
    value: 'nameDesc',
    title: 'Z->A',
    mongoose: { name_en: 'desc' }
  },
  category: {
    value: 'category',
    title: '類別',
    mongoose: { category: 'asc' }
  },
  location: {
    value: 'location',
    title: '地區',
    mongoose: { location: 'asc' }
  },
  rating: {
    value: 'rating',
    title: '最高評分',
    mongoose: { rating: 'desc' }
  }
}

router.get('/', (req, res) => {
  Restaurant.find({ userId: req.user._id })
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants, sortList }))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
  const keyword = new RegExp(req.query.keyword.trim(), 'i')

  Restaurant.find({ $or: [{ name: keyword }, { category: keyword }], userId: req.user._id })
    .lean()
    .sort(sortList[req.query.sortBy].mongoose)
    .then(function (restaurants) {
      if (restaurants.length > 0) {
        res.render('index', { restaurants, sortList, query: req.query })
      } else {
        res.render('index', { no_result: '<h3>搜尋沒有結果</h3>', query: req.query })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
