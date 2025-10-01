function authMiddleware(req, res, next) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Token de autorização ausente ou inválido'});
    }

    const token = authorizationHeader.split(' ')[1];

    if (token !== `${JWT_SECRET}`) {
        return res.status(403).json({message: 'Token inválido'});
    }

    next();
}

module.exports = authMiddleware;
