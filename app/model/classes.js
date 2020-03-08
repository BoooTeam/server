/* jshint indent: 2 */

module.exports = function({ Sequelize: { DataTypes } }, sequelize) {
  return sequelize.define('classes', {
    class_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    class_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    class_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
    class_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'classes',
    createdAt: false,
    updatedAt: false,
  });
};
