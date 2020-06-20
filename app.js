const express = require('express')
const exphb = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const app = express()

const db = require('./models')
const Todo = db.Todo
const User = db.User

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




// routers
app.use('/users', require('./routes/user'))

app.listen(port, () => {
  console.log('server start!')
})