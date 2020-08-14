const express = require('express'); 
const router = express.Router(); 


// login/landing page route 
// route  GET / 

router.get('/', (req,res) => {
  res.send('Login')
})



// dashboard route 
// route   GET /dashboard


router.get('/dashboard', (req,res) => {
  res.send('dashboard')
})






module.exports = router; 