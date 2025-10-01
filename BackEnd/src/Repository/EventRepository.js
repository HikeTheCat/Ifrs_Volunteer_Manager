const db = require('../config/db');
const Event = require('../entities/Event');

class EventRepository {
    constructor() {
        this.db = db;
    }

    async listAll() {
        const sql = 'SELECT * FROM events';
        const [rows] = await this.db.execute(sql);

        const events = rows.map(row => new Event(row));
        return events;
    }

    async create(eventDate) {
        const sql = 'INSERT INTO events (name, date, description, adress) VALUES (?,?,?,?)';
        const parameters = [eventDate.name, eventDate.date, eventDate.description, eventDate.adress];
        const [result] = await this.db.execute(sql, parameters);
        return { id: result.insertId, ...eventDate };
    }
}

module.exports = new EventRepository();
