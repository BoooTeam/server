/* eslint valid-jsdoc: "off" */


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 33306,
    password: 'root',
    user: 'root',
    database: 'schoolbi',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580865290605_7421';
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your middleware config here
  // config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
