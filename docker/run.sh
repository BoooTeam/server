#!/bin/bash
echo "开始检查本地是否有mysql5.7镜像"
hasMysql=`docker images | grep "bingozhou/mysql5.7"`
runningMysql=`docker ps | grep "school_bi_mysql"`
if [ -n "$hasMysql" ]; then
  echo "本地存在mysql5.7镜像"
else
  echo "本地不存在mysql5.7镜像，即将拉取镜像文件"
  docker pull bingozhou/mysql5.7
fi


if [ -n "$runningMysql" ]; then
  echo "mysql已经运行中，跳过"
else
  echo "准备启动mysql镜像"
  docker run -di --name school_bi_mysql -p 33306:3306 -e MYSQL_ROOT_PASSWORD=root bingozhou/mysql5.7:latest
  mysql -h 127.0.0.1 -p 33306 -u root -proot -D school_bi -e "create databse IF not EXISTS schoolbi DEFAULT CHARSET utf8 COLLATE utf8_general_ci;"
  #mysql -h 127.0.0.1 -p 33306 -u root -proot school_bi < ../schoolbi.sql
fi

