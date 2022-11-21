import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouters from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from "./routes/Answers.js"



const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// app.use('/', (req, res) => {
//   res.send('This is a stack overflow clone api');
// });

app.use('/user', userRouters);
app.use('/questions', questionRoutes);
app.use("/answer", answerRoutes)
const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  'mongodb+srv://admin:admin@stack-overflow-clone.zmjwdhi.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://admin:<password>@stack-overflow-clone.zmjwdhi.mongodb.net/test
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
