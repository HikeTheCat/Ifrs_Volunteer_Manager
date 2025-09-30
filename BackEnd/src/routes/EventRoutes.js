const router = require('express').Router();

const EventController = require('../controllers/EventController');

router.get('/events', EventController.listEvents);

module.exports = router;

