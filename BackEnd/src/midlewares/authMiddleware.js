
const AuthService = require('../services/AuthService');

function authMiddleware(req, res, next) {
    const token = authorizationHeader.split(' ')[1];

    const payload = AuthService.verifyToken(token);

    if (payload) {
        req.user = payload;
        next();
    } else {
        return res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
}
