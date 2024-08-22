const express = require('express');
const router = express.Router();
const apiService = require('../services/apiServices');

router.post('/test', async (req, res) => {
  try {
    const result = await apiService.runTests(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
