
const Controller = require('egg').Controller;

class StudentsController extends Controller {
  async query() {
    const {
      student_id = '',
      student_name = '',
      student_pass = '',
      current = 1,
      pageSize = 20 } = this.ctx.query;
    try {
      const data = await this.service.students.query({
        student_id,
        student_name,
        student_pass,
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

module.exports = StudentsController;
