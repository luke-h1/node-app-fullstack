const express = require('express'); 
const router = express.Router(); 


// login/landing page route 
// route  GET / 

router.get('/', (req,res) => {
  res.render('login', {
    layout: 'login'
  })
})



// dashboard route 
// route   GET /dashboard


router.get('/dashboard', (req,res) => {
  res.render('dashboard')
})






module.exports = router; 