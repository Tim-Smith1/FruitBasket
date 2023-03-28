const router = require('express').Router();

const apiFruitRoutes = require('./fruitRoutes');
///api/fruits
router.use('/fruits', apiFruitRoutes);

module.exports = router;