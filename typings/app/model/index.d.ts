// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClasses = require('../../../app/model/classes');
import ExportExperiments = require('../../../app/model/experiments');
import ExportSchoolIndustry = require('../../../app/model/school_industry');
import ExportSchools = require('../../../app/model/schools');
import ExportStudents = require('../../../app/model/students');
import ExportTeachers = require('../../../app/model/teachers');

declare module 'egg' {
  interface IModel {
    Classes: ReturnType<typeof ExportClasses>;
    Experiments: ReturnType<typeof ExportExperiments>;
    SchoolIndustry: ReturnType<typeof ExportSchoolIndustry>;
    Schools: ReturnType<typeof ExportSchools>;
    Students: ReturnType<typeof ExportStudents>;
    Teachers: ReturnType<typeof ExportTeachers>;
  }
}
