import express from 'express'
import morgan from 'morgan'
import path from 'path'
// import handlebars from 'express-handlebars'
const handlebars = require('express-handlebars')
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import flash from 'connect-flash'
import route from './routes'
import db from './config/db'
import session from 'express-session'

//Connect to DB
db.connect()

const app = express()
const port = 3000

// Use Session 
app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'woot',
  resave: false,
  saveUninitialized: false
}));


//BodyParse to use req.body in controller
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Connect-flash
app.use(flash())

//Import method override to override GET in hbs and use PUT PATCH or DELETE
app.use(methodOverride('_method'))

//Path file to public-> .../
app.use(express.static(path.join(__dirname, 'public')))

//Http logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  //Helpers custom funtion to @index + sum in handlebars 
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app)

//App listening port 3000
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
