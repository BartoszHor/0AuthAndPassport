const express = require('express');
const router = express.Router();

router.get('/profile', (req,res)=> {
    console.log(req.user)
    req.user ? res.render('profile') : res.redirect('/user/no-permission');
 });
 
 router.get('/profile/settings', (req,res)=> {
     req.user ? res.render('settings') : res.redirect('/user/no-permission');
 });

router.get('/logged', (req, res) => {
    console.log(req.user.photos[0].value)
    req.user ? res.render('logged', {name:req.user.displayName, photo:req.user.photos[0].value}) : res.redirect('/user/no-permission');
});

router.get('/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
  });

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;