/*
 Navicat Premium Data Transfer

 Source Server         : schoolBI
 Source Server Type    : MySQL
 Source Server Version : 50718
 Source Host           : localhost
 Source Database       : schoolbi

 Target Server Type    : MySQL
 Target Server Version : 50718
 File Encoding         : utf-8

 Date: 02/17/2020 17:10:52 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `classes`
-- ----------------------------
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '班级编号',
  `teacher_id` int(11) NOT NULL COMMENT '所属老师编号',
  `class_name` varchar(200) NOT NULL COMMENT '班级名称',
  `class_status` int(1) NOT NULL DEFAULT '1' COMMENT '班级状态  1为正常 0为停用',
  `class_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `experiments`
-- ----------------------------
DROP TABLE IF EXISTS `experiments`;
CREATE TABLE `experiments` (
  `experiment_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '实验编号',
  `experiment_result` text COMMENT '实验结论',
  `experiment_student_id` int(11) DEFAULT NULL COMMENT '实验学生编号',
  `experiment_teacher_id` int(11) DEFAULT NULL COMMENT '实验评分老师编号',
  `experiment_score` float DEFAULT NULL COMMENT '实验评分',
  PRIMARY KEY (`experiment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='实验表';

-- ----------------------------
--  Table structure for `school_industry`
-- ----------------------------
DROP TABLE IF EXISTS `school_industry`;
CREATE TABLE `school_industry` (
  `industry` varchar(200) NOT NULL COMMENT '行业',
  `school_id` int(11) NOT NULL COMMENT '学校ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='行业和院校的对照表\n用于判断院校属于哪个行业';

-- ----------------------------
--  Table structure for `schools`
-- ----------------------------
DROP TABLE IF EXISTS `schools`;
CREATE TABLE `schools` (
  `school_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '院校自增编号',
  `school_name` varchar(200) NOT NULL COMMENT '院校名称',
  `school_email` varchar(200) NOT NULL COMMENT '院校email',
  `school_ip` varchar(200) DEFAULT NULL COMMENT '院校服务器IP地址',
  `school_admin_phone` varchar(11) NOT NULL COMMENT '院校管理员手机号',
  `school_admin_pass` varchar(32) NOT NULL COMMENT '院校密码 简单的32位md5密码',
  `school_status` int(1) NOT NULL DEFAULT '1' COMMENT '院校状态  1为正常  0为停用',
  `school_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '院校创建时间',
  PRIMARY KEY (`school_id`),
  UNIQUE KEY `school_admin_phone` (`school_admin_phone`) USING BTREE,
  UNIQUE KEY `school_name` (`school_name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='学校表';

-- ----------------------------
--  Table structure for `students`
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '学生编号',
  `student_name` varchar(200) NOT NULL COMMENT '学生姓名',
  `student_phone` varchar(11) NOT NULL COMMENT '学生手机号',
  `student_pass` varchar(32) NOT NULL COMMENT '学生密码',
  `student_status` int(1) NOT NULL DEFAULT '1' COMMENT '学生状态  1为正常 0为停用',
  `student_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `student_phone` (`student_phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `teachers`
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `teacher_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '教师编号',
  `teacher_name` varchar(200) NOT NULL COMMENT '教师名字',
  `teacher_phone` varchar(11) NOT NULL COMMENT '教师手机号',
  `teacher_pass` varchar(32) NOT NULL COMMENT '教师账号登录密码',
  `teacher_created` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `teacher_status` int(1) NOT NULL DEFAULT '1' COMMENT '教师状态   1为正常  0为停用',
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `teacher_phone` (`teacher_phone`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='教师表';

SET FOREIGN_KEY_CHECKS = 1;
