const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { JWT_SECRET } = process.env;

class AuthService {
    static generateToken(payload) {
        return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    }

    static verifyToken(token) {
        try {
            const decoded = jsonwebtoken.verify(token, JWT_SECRET);
            return decoded;
        } catch (error) {
            return null;
        }
    }
}

module.exports = AuthService;
