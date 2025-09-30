const EventModel = require('../mdoels/EventModel');

class EventService {
    async listAll() {
        return await EventModel.listAll();
    }
};

module.exports = new EventService();
