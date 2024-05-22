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
  res.redirect('/administrar');    
} else {
  logged = false
  res.redirect('/administrar')
}
});

// administrar
router.get('/administrar', function(req, res, next) {
  res.render('administrar');
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

// matricula
router.get('/matricula', (req, res)=>{
  db.getprincipal()
  .then(data => {        
    res.render('matricula', { principal: data });
})
.catch(err => {
    res.render('matricula', { principal: [] });
})
})

// simoncitos
router.get('/simoncitos', (req, res)=>{
  db.getsimoncitos()
  .then(data => {        
    res.render('simoncitos', { simoncito: data });
})
.catch(err => {
    res.render('simoncitos', { simoncito: [] });
})
})

// ingresar


router.get('/ingresar', (req, res) => {
  res.render('ingresar')
} )

router.post('/ingresar', (req,res) =>{
console.log(req.body)
const {simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo} = req.body;
console.log(simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo);
db. insertsimoncito(simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo)
  .then(() => {
     res.redirect('simoncitos')
  })
  .catch(err => {
    console.log(err);
  })
});



// municipios
router.get('/municipios', (req, res)=>{
  db.getprincipal()
  .then(data => {        
    res.render('municipios', { principal: data });
})
.catch(err => {
    res.render('municipios', { principal: [] });
})
})


// blog
router.get('/blog', function(req, res, next) {
  res.render('blog');
});

module.exports = router;
