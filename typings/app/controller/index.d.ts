// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportSchool = require('../../../app/controller/school');
import ExportStudents = require('../../../app/controller/students');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    school: ExportSchool;
    students: ExportStudents;
    user: ExportUser;
  }
}
