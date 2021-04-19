import mongoose from 'mongoose'
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.Promise = Promise
mongoose.connect(
  'mongodb+srv://cluster0.zjqna.mongodb.net',
  {
    dbName: 'Margetry',
    user: DB_USERNAME,
    pass: DB_PASSWORD,
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
)
