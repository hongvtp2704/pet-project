import express, { Express, Request, Response } from 'express';
import {connection, pool } from './database/config';

const app: Express = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello word!!');
});

export const viteNodeApp = app;


