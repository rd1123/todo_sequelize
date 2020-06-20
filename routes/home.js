const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const Todo = db.Todo
const { authenticated } = require('../config/auth')

app.get('/', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('User not found')

      return Todo.findAll({
        where: {
          UserId: req.user.id,
        }
      })
        .then(todos => res.render())
    })
})

module.exports = router