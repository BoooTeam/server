const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    console.log('收到参会', this.ctx.body);
    const {
      ctx: { request },
    } = this;
    console.log('ctx===', request);
    this.ctx.body = { status: 200, msg: '成功' };
    try {
      // const { ctx } = this;
      // console.log('ctx===', ctx);
    } catch (e) {
      console.log(e);
      this.app.logger.error(e);
      this.ctx.body = {
        status: 500,
        msg: '服务器错误',
      };
    }

  }
}
module.exports = UserController;
