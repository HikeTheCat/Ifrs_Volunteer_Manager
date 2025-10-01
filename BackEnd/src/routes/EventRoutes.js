const router = require('express').Router();

const EventController = require('../controllers/EventController');

router.get('/events', (req , res) => EventController.listEvents(req, res));
router.post('/events', (req, res) => EventController.createEvent(req, res));

module.exports = router;

