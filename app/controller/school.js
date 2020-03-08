const Controller = require('egg').Controller;

class SchoolController extends Controller {
  async create() {
    const { ctx } = this;
    ctx.body = '';
  }

  async query() {
    const { school_admin_phone = '',
      school_email = '',
      school_name = '',
      startTime = '',
      endTime = '',
      current = 1,
      pageSize = 20 } = this.ctx.query;
    try {
      const data = await this.service.school.query({
        school_admin_phone,
        school_email,
        school_name,
        startTime,
        endTime,
        page: current,
        limit: pageSize,
      });

      this.ctx.body = {
        status: 200,
        data: data.data,
        current,
        pageSize,
        total: data.total,
      };
    } catch (e) {
      this.app.logger.error(e);
      this.ctx.body = {
        status: 500,
        msg: '服务器错误',
      };
    }
  }
}

module.exports = SchoolController;
