import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';





const app = express();

// Allow credentials so frontend can receive httpOnly cookies (refresh token)
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

export default app;
