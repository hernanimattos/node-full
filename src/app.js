import dotenv from 'dotenv';
import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import mainRouter from './router/main';


// eslint-disable-line

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));
// app.use(RedisCacheManager);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(mainRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ err });
});

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});

export default app;
