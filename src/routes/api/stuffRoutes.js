/**
 * Created by levy on 2018/7/18.
 */
/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const StuffController = require('../../controller/stuffController');
const stuffController = new StuffController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    stuffController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    stuffController.exists(req, res);
});

router.get('/:id', function (req, res) {
    stuffController.findById(req, res);
});

router.get('/', function (req, res) {
    stuffController.findAll(res);
});

router.put('/:id', function (req, res) {
    stuffController.update(req, res);
});

router.post('/create', function (req, res) {
    stuffController.create(req, res);
});

router.delete('/:id', function (req, res) {
    stuffController.deleteById(req, res);
});

module.exports = router;