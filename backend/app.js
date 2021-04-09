var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
const cors = require('cors');
var usersRouter = require('./routes/users');
// const seedTodo = require('./seeds');
// seedTodo();
var app = express();

var whitelist = ['http://localhost:8000/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors());



mongoose.connect("mongodb://localhost:27017/todo",{useNewUrlParser:true,useUnifiedTopology:true})

const db=  mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log("We are Connected to MongoDB");
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
