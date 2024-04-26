/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1714099168509_1985";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.bodyParser = {
    jsonLimit: "1mb", // 对请求体中传递的 JSON 数据限制大小为 1mb （Content-Type: application/json）
    formLimit: "1mb", // 对请求体中传递的 表单数据 限制大小为 1mb（Content-Type: x-www-form-urlencoded）
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "299536",
      database: "hm_test",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
