const router = require('express').Router();

const apiFruitRoutes = require('./api');

router.use('/api', apiFruitRoutes);

module.exports = router;