const EventService = require('../services/EventService');

class EventController {
    constructor() {
        this.EventService = EventService;
    }

        /**
     * Handles the HTTP GET request to list all events.
     * @param {object} req - The Express request object.
     * @param {object} res - The Express response object.
     */

    async listEvents(req, res) {
        try {
            const events = await this.EventService.listAll();
            return res.status(200).json(events);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar eventos' });
        }
        }

        async createEvent(req, res) {
            try {
                const eventDate = req.body;
                const newEvent = await this.EventService.create(eventDate);
                return res.status(201).json(newEvent);
            }
            catch (error) {
                console.error(error);
                if (error.message.includes('deve ter pelo menos')) {
                    return res.status(400).json({ message: error.message });
                } else {
                    return res.status(500).json({ message: 'Erro ao criar evento' });
                }
            }
        }
    }

    module.exports = new EventController(EventService);
