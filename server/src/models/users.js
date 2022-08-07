const { BIGINT, STRING, BOOLEAN, DECIMAL } = require('sequelize');
module.exports = (db) => {
  const Users = db.define(
    'users',
    {
      id: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: STRING(100),
        allowNull: false,
      },
      name: {
        type: STRING(100),
        allowNull: false,
      },
      password: {
        type: STRING(500),
        allowNull: false,
      },
      token: {
        type: STRING(500),
      },
      threshold_calories: {
        type: DECIMAL,
        defaultValue: 2.100
      },
      is_admin: {
        type: BOOLEAN,
        defaultValue: false
      },
      active: {
        type: BOOLEAN,
        defaultValue: true
      }
    },
    {
      tableName: 'users',
    }
  );

  return Users;
}
