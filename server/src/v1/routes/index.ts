import express, {Express, Router} from "express";
import testRouter from './test';

const routes = Router();

routes.use('/user', testRouter);

export default routes;