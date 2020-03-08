// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSchool = require('../../../app/service/school');
import ExportStudents = require('../../../app/service/students');

declare module 'egg' {
  interface IService {
    school: ExportSchool;
    students: ExportStudents;
  }
}
