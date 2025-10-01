const jsonwebtoken = require ('jsonwebtoken');
const brypt = require('bcrypt.js');

const { JWT_SECRET } = process.env;

class AuthService {
    static generateToken(payload) {
        return jsonwebtoken.sign(payload, JWT_SECRET, {expiresIn: '1h'});
    }
}

module.exports = AuthService;
const router = require ('express').Router();
const authMiddleware = require('../midlewares/authMiddleware');
const EventController = require('../controllers/EventController');
