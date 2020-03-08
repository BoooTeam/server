/* jshint indent: 2 */

module.exports = function({ Sequelize: { DataTypes } }, sequelize) {
  return sequelize.define('schools', {
    school_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    school_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    school_email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    school_ip: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    school_admin_phone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    school_admin_pass: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    school_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
    school_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'schools',
    createdAt: false,
    updatedAt: false,
  });
};
