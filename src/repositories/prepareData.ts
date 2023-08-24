import fs from 'fs';
import { parse } from 'csv-parse';
import { connectToDatabase } from './connectToDatabase';

export const prepareData = (filepath = '../public/docs/students.csv') => {
  const db = connectToDatabase();

  fs.createReadStream(filepath, 'utf8')
    .pipe(parse({ delimiter: ';', from_line: 2 }))
    .on('data', function (row) {
      console.log(row[1], row[5], row[6], row[18], row[19], row[23], row[25]);
      db.serialize(function () {
        db.run(
          `INSERT INTO migration VALUES (?, ?, ? , ?, ?, ?, ?)`,
          [row[1], row[5], row[6], row[18], row[19], row[23], row[25]],
          function (error: { message: any }) {
            if (error) {
              return console.log(error.message);
            }
          }
        );
      });
		});
};
