/* jshint indent: 2 */

module.exports = function({ Sequelize: { DataTypes } }, sequelize) {
  return sequelize.define('school_industry', {
    industry: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    school_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'school_industry',
    createdAt: false,
    updatedAt: false,
  });
};
