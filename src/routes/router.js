/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/stuff', require('./api/stuffRoutes'));
router.use('/gift', require('./api/giftRoutes'));

module.exports = router;