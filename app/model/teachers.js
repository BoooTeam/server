/* jshint indent: 2 */

module.exports = function({ Sequelize: { DataTypes } }, sequelize) {
  return sequelize.define('teachers', {
    teacher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    teacher_phone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    teacher_pass: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    teacher_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    teacher_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
  }, {
    tableName: 'teachers',
    createdAt: false,
    updatedAt: false,
  });
};
