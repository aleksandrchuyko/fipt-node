import fs from 'fs';
const sqlite3 = require('sqlite3').verbose();
import { AsyncDatabase } from "promised-sqlite3";

export const connectToDatabase = (filepath = 'src/repositories/db/students.db') => {
  
  
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error: { message: any }) => {
      if (error) {
        return console.error(error.message);
      }
    });
    db.exec(`
        CREATE TABLE migration
        (
          status  VARCHAR(20),
          id_fo INT,
          applicant VARCHAR(100),
          birth_date   VARCHAR(10),
          passport_type VARCHAR(30),
          passport_series VARCHAR(3),
          passport_number INT,
          passport_issue  VARCHAR(10),
          passport_expiry VARCHAR(10),
          sex VARCHAR(10),
          start_study        VARCHAR(10),
          end_study              VARCHAR(10),
          degree              VARCHAR(10),
          admission_based VARCHAR(50),
          study_type         VARCHAR(10),
          funding_source  VARCHAR(20),
          specialty VARCHAR(100),
          educational_program VARCHAR(100),
          grade INT,
          group VARCHAR(10),
          admission_order VARCHAR(100)
        )
      `);
    console.log('Connected to the database successfully');
    return AsyncDatabase.open(filepath);
  }
};
