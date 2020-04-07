const express = require('express');
const router = express.Router();


 // define the blog home page 
router.get('/', function (req, res) {
  res.send('Blog home page')
})
// define the specific route
router.get('/:title', function (req, res) {
  res.send('send specific blog, title: ' + req.params.title)
})

module.exports = router