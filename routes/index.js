var express = require('express');
var router = express.Router();
const db = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// mision
router.get('/mision', function(req, res, next) {
  res.render('mision');
});

// vision
router.get('/vision', function(req, res, next) {
  res.render('vision');
});

// proyecciones
router.get('/proyecciones', function(req, res, next) {
  res.render('proyecciones');
});

// logros
router.get('/logros', function(req, res, next) {
  res.render('logros');
});

// login
router.get('/login', (req, res) => {
  res.render('login')
} )

router.post('/login', (req,res) =>{
console.log(req.body)
if (req.body.user === "user" && req.body.pass === "admin") {
  console.log("Iniciaste")
  logged = true
  res.redirect('/tabla');    
} else {
  logged = false
  res.redirect('/login')
}
});

// tabla

router.get('/tabla', (req, res)=>{
  db.getprincipal()
  .then(data => {        

    res.render('tabla', { principal: data });
})
.catch(err => {
    res.render('tabla', { principal: [] });
})
})

module.exports = router;
