const { generateError } = require('../../services/errors');
const getDB = require('../../db/getDB');

const selectUserEmailQuery = async (email) => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(
      `SELECT id, password, active, type FROM users WHERE email = ?`,
      [email]
    );

    if (users.length < 1) {
      generateError('Usuario no registrado', 404);
    }

    if (users[0].active === 0) {
      generateError(
        'Su cuenta a sido desactivada por violación de politica, pongase en contacto con el equipo de Social Doby',
        401
      );
    }

    return users[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectUserEmailQuery;
