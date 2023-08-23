const insertUserQuery = require('../../models/usersQuery/insertUserQuery');

const newUser = async (req, res, next) => {
  try {
    const { email, username, password, type } = req.body;

    //await validateSchema(newUserSchema, req.body);

    await insertUserQuery(email, username, password, type);

    res.send({
      status: 'ok',
      message:
        'Usuario creado',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newUser;
