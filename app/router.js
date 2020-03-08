

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  /**
   * 用户登录
   */
  router.post('/api/login/', controller.user.login);
  // 学校相关接口
  // 获取学校列表
  router.get('/api/school/', controller.school.query);
  // 新增院校接口 目前不需要
  router.post('/api/school/', controller.school.create);

  // 学生管理接口

  router.get('/api/students/query', controller.students.query);


};
