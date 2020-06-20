const express = require('express')
const exphb = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const app = express()

const port = 3000

app.engine('handlebars', exphb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


app.get('/', (req, res) => {
  res.send('good page')
})

//users
app.get('/users/login', (req, res) => {
  res.render('login')
})

app.post('/users/login', (req, res) => {
  res.send('check login')
})

app.get('/users/register', (req, res) => {
  res.render('register')
})

app.post('/users/register', (req, res) => {
  res.send('register init')
})

app.get('/users/logout', (req, res) => {
  res.send('logout')
})

app.listen(port, () => {
  console.log('server start!')
})