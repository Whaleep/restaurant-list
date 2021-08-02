const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// create
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  return Restaurant.create({ ...req.body, userId: req.user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// detail
router.get('/:id', (req, res) => {
  return Restaurant.findOne({ _id: req.params.id, userId: req.user._id })
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// edit
router.get('/:id/edit', (req, res) => {
  return Restaurant.findOne({ _id: req.params.id, userId: req.user._id })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId: req.user._id })
    .then(restaurant => {
      Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})

// delete
router.delete('/:id', (req, res) => {
  return Restaurant.findOne({ _id: req.params.id, userId: req.user._id })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router

// note
// 加在含有 :id 的 router ，可以在 id 無效時導回首頁。id 有效指英數剛好24字符。
// if (!mongoose.Types.ObjectId.isValid(id)) return res.redirect('back')
