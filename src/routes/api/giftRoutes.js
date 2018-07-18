/**
 * Created by levy on 2018/7/18.
 */
/**
 * Created by levy on 2018/7/18.
 */
/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const GiftController = require('../../controller/giftController');
const giftController = new GiftController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    giftController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    giftController.exists(req, res);
});

router.get('/:id', function (req, res) {
    giftController.findById(req, res);
});

router.get('/', function (req, res) {
    giftController.findAll(res);
});

router.put('/:id', function (req, res) {
    giftController.update(req, res);
});

router.post('/create', function (req, res) {
    giftController.create(req, res);
});

router.delete('/:id', function (req, res) {
    giftController.deleteById(req, res);
});

module.exports = router;