const { db } = require('./../models');
const loginResponse = require('./../mappers/loginResponse')

const loginUser = async (request, response) => {
   const { email, password } = request.body;
   const user = await db.users.findOne({ where: { email, password }});

   if(!user) {
    response.status(401).json({ message: 'Invalid User or Password' });
    return;
   }

   const token = Date.now();
   await db.users.update({ token }, { where: { id: user.id }});

   response.json(loginResponse(user, token));
}

const logoutUser = async (request, response) => {
    try {
        await db.users.update({ token: null }, { where: { id: request.user.id }});
        response.sendStatus(204);
    } catch(error) {
        response.status(500).send({ message: error.message })
    }
 }

module.exports = {
    loginUser,
    logoutUser
}