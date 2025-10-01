const EventRepository = require('../repositories/EventRepository');
const Event = require('../entities/Event');

class EventService {
    constructor() {
        this.EventRepository = EventRepository;
    }

    async listAll() {
        const events = await this.EventRepository.listAll();
        return events;
    }

    async create(eventDate) {
        const newEvent = (eventDate);
        const events = await this.EventRepository.create(newEvent);
        return events;
    }
}

    module.exports = new EventService();

