const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3001;
let Question = require('./models/question.model');
let Test = require('./models/test.model');
let questionRoute = require('./routes/question.route');
let testRoute = require('./routes/test.route');
let adminRoute = require('./routes/admin.route');
let userRoute = require('./routes/user.route');
let examRouter = require('./routes/exam.route');
let bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/toiec',  { useNewUrlParser: true });

app.set('view engine', 'ejs');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/tests', testRoute);
app.use('/tests', questionRoute);
app.use('/admin', adminRoute);
app.use('/users', userRoute);
app.use('/exam',examRouter);

app.listen(port, () => console.log('Connect to server!'));

