const { BIGINT, STRING, BOOLEAN, INTEGER, DATE, DECIMAL } = require('sequelize');
const path = require('path');
module.exports = (db) => {
  const UserDiets = db.define(
    'user_diets',
    {
      id: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING(100),
        allowNull: false,
      },
      calories: {
        type: DECIMAL,
        allowNull: false,
      },
      user_id: {
        type: INTEGER,
        allowNull: false,
      },
      consumed_at: {
        type: DATE
      },
      created_at: {
        type: DATE,
      },
      is_cheat_diet: {
        type: BOOLEAN,
        defaultValue: false
      },
    },
    {
      tableName: 'user_diets',
      createdAt: false,
      updatedAt: false,
    }
  );

  const Users = db.import(path.join(__dirname, 'users'));
  UserDiets.belongsTo(Users, {
    foreignKey: 'user_id',
    as: 'user',
  });
  Users.hasMany(UserDiets, {
    foreignKey: 'user_id',
    as: 'diets',
  });
  return UserDiets;
}
