const { app, assert } = require('egg-mock/bootstrap');
const md5 = require('md5');

describe('create()', () => {
  it('should create a school', async () => {
    // 创建 ctx
    const ctx = app.mockContext();
    // 通过 ctx 访问到 service.user
    const school = await ctx.service.school.create({
      school_name: '清华大学',
      school_email: 'qinghua@baiwang.com',
      school_ip: '0.0.0.0',
      school_admin_phone: '15330066919',
      school_admin_pass: md5('123456'),
      school_status: 1,
    });
    console.log(school);
    assert(school);
  });
});

describe('query()', () => {
  it('should search school list', async () => {
    const ctx = app.mockContext();
    // 通过 ctx 访问到 service.user
    const school = await ctx.service.school.query({

    });
    console.log(school);
    assert(school);
  });

});
