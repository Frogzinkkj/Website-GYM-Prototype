const express = require('express');
const router = express.Router();

// Register route
router.post('/register', (req, res) => {
  const { email, password } = req.body;
  // Logic to register user goes here
  res.redirect('/confirmEmail'); // Redirect after successful registration
});

// Confirm Email route
router.post('/confirmEmail', (req, res) => {
  const { confirmEmail } = req.body;
  // Logic to confirm email goes here
  res.redirect('/selectPlan'); // Redirect to plan selection after email confirmation
});

// Select Basic Plan route
router.get('/selectPlan/basic', (req, res) => {
  // Render basic plan selection page
  res.render('selectPlanBasic');
});

// Select Advanced Plan route
router.get('/selectPlan/advanced', (req, res) => {
  // Render advanced plan selection page
  res.render('selectPlanAdvanced');
});

// Select Premium Plan route
router.get('/selectPlan/premium', (req, res) => {
 
  res.render('selectPlanPremium');
});

module.exports = router;