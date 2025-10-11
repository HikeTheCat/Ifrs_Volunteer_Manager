const db = require('../config/db');
const Event = require('../entities/Event');

class EventRepository {
    constructor() {
        this.db = db;
    }

    async listAll() {
        const sql = 'SELECT * FROM events';
        const [rows] = await this.db.execute(sql);

        const events = rows.map(row => new Event(row.id , row.name, row.date, row.description, row.location));
        return events;
    }

    async create(eventDate) {
        const sql = 'INSERT INTO events (name, date, description, location) VALUES (?,?,?,?)';
        const parameters = [eventDate.name, eventDate.date, eventDate.description, eventDate.location];
        const [result] = await this.db.execute(sql, parameters);
        return { id: result.insertId, event: new Event(result.insertId, eventDate.name, eventDate.date, eventDate.description, eventDate.location) };
    }
}

module.exports = new EventRepository();
