import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import userRouters from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// app.use('/', (req, res) => {
//   res.send('This is a stack overflow clone api');
// });

app.use('/user', userRouters);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);
const PORT = process.env.PORT || 5000;
//serving the index
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function (_, res) {
  res.sendFile(
    path.join(__dirname, './client/build/index.html'),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const DATABASE_URL = process.env.CONNECTION_URL;
// console.log('DATABASE_URL', DATABASE_URL);
// 'mongodb+srv://admin:admin@stack-overflow-clone.zmjwdhi.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://admin:<password>@stack-overflow-clone.zmjwdhi.mongodb.net/test
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
