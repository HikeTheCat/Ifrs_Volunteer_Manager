const EventRepository = require('../repositories/EventRepository');

class EventService {
    constructor() {
        this.EventRepository = EventRepository;
    }

    async listAll() {
        const events = await this.EventRepository.listAll();
        return events;
    }

    async create(eventDate) {
        await this.validate(eventDate);
        const newEvent = await this.EventRepository.create(eventDate);
        return newEvent;
    }

 /**
     * Validates the data for a new event.
     * @param {object} eventDate - The event data to validate.
     */
    async validate (eventDate) {
        if (!eventDate.name || eventDate.name.length < 3) {
            throw new Error('O nome é obrigatório e deve ter pelo menos 3 caracteres.');
        } if
        (!eventDate.date || isNaN(Date.parse(eventDate.date))) {
            throw new Error('A data é obrigatória e deve ser uma data válida.');
        } if
        (!eventDate.description || eventDate.description.length < 10) {
            throw new Error('A descrição é obrigatória e deve ter pelo menos 10 caracteres.');
        }
        if (!eventDate.location || eventDate.location.length < 5) {
            throw new Error('A localização é obrigatória e deve ter pelo menos 5 caracteres.');
        }
        if (new Date(eventDate.date) < new Date()) {
            throw new Error('A data do evento não pode ser no passado.');

            }
        }
    }

    module.exports = new EventService();

