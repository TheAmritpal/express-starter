import express from 'express';
import router from './routes/api.mjs';

const app = express();

// Define routes and middleware here
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
