const express = require('express')
const router = express.Router()
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  res.send('全部todo')
})

router.get('/new', authenticated, (req, res) => {
  res.send('建立todo頁面')
})

router.get('/:id', authenticated, (req, res) => {
  res.send('顯示一筆頁面')
})

router.post('/', authenticated, (req, res) => {
  res.send('新增一筆')
})

router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改todo頁面')
})

router.put('/:id', authenticated, (req, res) => {
  res.send('修改todo')
})

router.delete(':id/delete', authenticated, (req, res) => {
  res.send('刪除todo')
})

module.exports = router