/* jshint indent: 2 */

module.exports = function({ Sequelize: { DataTypes } }, sequelize) {
  return sequelize.define('experiments', {
    experiment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    experiment_result: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    experiment_student_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    experiment_teacher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    experiment_score: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }, {
    tableName: 'experiments',
    createdAt: false,
    updatedAt: false,
  });
};
