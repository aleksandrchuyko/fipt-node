const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT } = process.env;

mongoose
  .set('strictQuery', true)
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful!');
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.log(error.message);
    process.exit(1);
  });
