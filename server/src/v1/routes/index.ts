import {Express} from "express";
import userRouter from './user'

const routes = (app:Express):void => {
    app.use('/user', userRouter)
}

export default routes;