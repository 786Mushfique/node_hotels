const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST method for MenuItem
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('MenuItem data saved');
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  });
  
  // GET method for MenuItem
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log('MenuItem data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;