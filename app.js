const express = require('express');
const app = express();
const PORT = 8080;
const logger = require('morgan');
const favicon = require('serve-favicon')
const path = require('path');
const blogs = require('./blog.js'); //Route blog posts

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(logger('tiny')); //use http logger
app.use('/blog', blogs);
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/schedule-a-session', (req, res) => res.sendFile(path.join(__dirname + '/public/schedule.html')));
app.get('/flyoverGFW', (req, res) => {
    res.json({ msg : "the proxy service is underconstruction"});
})

//error handling
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })
//server error
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(PORT, () => console.log(`Server of Project Lucia listening on port ${PORT}!`));
