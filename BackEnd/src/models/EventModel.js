class EventModel {
    async listALl() {
        const sql = 'SELECT * FROM events';
         const[rows] = await db.query(sql);
            return rows;
    }
}
module.exports = new EventModel;
