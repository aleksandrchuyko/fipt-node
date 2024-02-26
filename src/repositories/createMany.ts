import { connectToDatabase } from './connectToDatabase';
import { Student } from 'models/students/student';

export const createMany = async (filepath = '../public/docs/students.csv') => {
  const db = await connectToDatabase();

  async function intoMongo(arr: any[]) {
    // Student.deleteMany({}, (err: any, data: any) => {
    //   if (err) return console.error(err);
    //   console.log('delete mongo ok');
    // });

    await Student.create(arr, (err: any, data: any) => {
      if (err) return console.error(err);
      console.log('into mongo ok');
    });
  }
  // db.serialize(function () {
  db.all(
    `SELECT * FROM migration`,
    function (error: { message: any }, rows: any[]) {
      if (error) {
        return console.log(error.message);
      } else {
        // console.log(rows.length);
        intoMongo(rows);
      }
    }
  );
  // });
};
