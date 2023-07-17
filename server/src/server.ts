import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import routes from './v1/routes';

const app: Express = express();

app.use(express.json());
app.use(
 bodyParser.urlencoded({
  extended: true,
 }),
);
app.use(cors());

app.use(routes);

export const viteNodeApp = app;
