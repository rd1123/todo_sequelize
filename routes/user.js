const express = require('express')
const router = express.Router()
const db = require('../models')
const User = db.User
const passport = require('passport')
const bcrypt = require('bcryptjs')


//users
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })(req, res, next)
})

router.get('/register', (req, res) => {
  res.render('register')

})

router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  const errors = []

  if (!name || !email || !password || !password2) {
    errors.push({ message: '所有欄位都是必填' })
  }
  if (password !== password2) {
    errors.push({ message: '密碼輸入錯誤' })
  }

  User.findOne({ where: { email: email } })
    .then(user => {
      if (user) {
        errors.push({ message: '此email已經註冊過了' })
        res.render('register', {
          name,
          email,
          password,
          password2
        })
      } else {
        const newUser = new User({
          name,
          email,
          password
        })
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash
            newUser.save()
              .then(user => res.redirect('/users/login'))
              .catch(error => res.status(422).json(error))
          })
        })
      }
    })
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '已經成功登出')
  res.redirect('/users/login')
})

module.exports = router