const { db } = require('../models');

const securize = async (request, response, next) => {
    const token = getTokenFromRequest(request);
    if(!token) {
        response.sendStatus(401);
        return;
    }

    const user = await db.users.findOne({where: { token }})

    if(!user) {
        response.sendStatus(401);
        return;
    }

    request.user = user;
    next();
}

const securizeAdmin = async (request, response, next) => {
    const token = getTokenFromRequest(request);
    if(!token) {
        response.sendStatus(401);
        return;
    }

    const user = await db.users.findOne({where: { token, is_admin: true }})

    if(!user) {
        response.sendStatus(401);
        return;
    }

    request.user = user;
    next();
}

const getTokenFromRequest = (request) => {
    return request.headers['authorization'];
};

module.exports = {
    securize,
    securizeAdmin
}