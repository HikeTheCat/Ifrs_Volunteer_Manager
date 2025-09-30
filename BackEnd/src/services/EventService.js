const EventModel = require('../models/EventModel');

class EventService {
    async listAll() {
        return await EventModel.listAll();
    }
};

module.exports = new EventService();
