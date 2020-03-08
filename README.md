# schoolBI

院校大数据

## QuickStart

config/config.default.js中配置好数据地址

### 自动从数据库生产model的操作方法

./docker/run.sh
前提条件，已经安装好了docker
执行后会自动启动mysql5.7镜像，并且配置好mysql相关用户名密码
只需要登录Navicat，导入根目录的schoolbi.sql文件到schoolbi数据库中

默认配置的数据库用户名和密码都是root

数据库名称schoolbi

将根目录下的schoolbi.sql文件导入


API数据格式

返回成功
```
// 带分页数据
{
  status: 200,
  data: [], 
  current: 1, //当前页面
  pageSize: 10, // 每页数据
  total: 1000, // 总数据量
}

// 不分页普通数据
{
  status: 200,
  data: {},
}
or
{
  status: 200,
  data: [],
}

// 错误

{
  status: 500,
  msg: '服务器错误', // 返回的具体错误提示文本
}

{
  status: 301,
  msg: '未登录', // 登录状态码
}
```



### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

技术储备：

sequelize-auto-egg -o "./app/model" -d schoolbi -h localhost -u root -p 33306 -x root -e mysql

自动生成model