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
          card_id       INT,
          applicant VARCHAR(100),
          birth_date   VARCHAR(10),
          start_study        VARCHAR(10),
          end_study              VARCHAR(10),
          degree              VARCHAR(10),
          study_type         VARCHAR(10)
        )
      `);
    console.log('Connected to the database successfully');
    return AsyncDatabase.open(filepath);
  }
};
