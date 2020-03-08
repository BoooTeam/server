/* jshint indent: 2 */

module.exports = function({ Sequelize: { DataTypes } }, sequelize) {
  return sequelize.define('students', {
    student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    student_phone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    student_pass: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    student_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
    student_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'students',
    createdAt: false,
    updatedAt: false,
  });
};
