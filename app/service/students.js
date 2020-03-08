const Service = require('egg').Service;
// const moment = require('moment');

class StudentsService extends Service {
  /**
   * 查询学生数据
   * @param {Object} option  参数
   * @param {string} option.school_admin_phone 院校登录手机号
   * @param {string} option.school_email 院校email字段
   * @param {string} option.school_name 院校名称
   * @param {string} option.startTime 开始时间
   * @param {string} option.endTime 结束时间
   * @param {number} option.page 查询当前页码
   * @param {number} option.limit 每页查询数量
   * @return {Promise} Promise 返回一个promise查询数据
   */
  async query({
    student_id = '',
    student_name = '',
    student_pass = '',
    page = 1,
    limit = 20,
  }) {
    const { Students } = this.ctx.model;
    const { Op } = this.app.Sequelize;

    const where = {};
    where.student_id = 1;
    [ student_id, student_name, student_pass ].forEach(item => {
      if (item) {
        where[item] = { [Op.like]: `%${item}%` };
      }
    });

    // if (startTime || endTime) {
    //   where.school_created = {};

    //   if (startTime) {
    //     where.school_created[Op.gte] = moment(startTime);
    //   }

    //   if (endTime) {
    //     where.school_created[Op.lte] = moment(endTime);
    //   }
    // }

    const total = await Students.count({
      where,
    });

    const data = await Students.findAll({
      limit,
      offset: limit * (page - 1),
      where,
    });

    return {
      data,
      total,
    };
  }
}

module.exports = StudentsService;
