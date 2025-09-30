const EventService = require('../services/EventService');

class EventController {

    async listEvents(req, res) {
        try {
            const events = await new EventService().listAll();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message:'Erro ao buscar eventos'});
        }
        }
    }

    module.exports = new EventController();
