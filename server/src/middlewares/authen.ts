import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config();

const authtorization = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.jwt;
    //if access token is not in cookies, request unauthorized
    if(!accessToken) {
        res.status(403).json({Error: "Unauthorized"});
    }

    try {
        //decode the access token received by serect key

        const decodeToken = jwt.verify(accessToken,  process.env.ACCESS_TOKEN_SERECT as string);
        //continue the next function if jwt verified
        next();

    } catch(err) {
        console.log("Authen",err);
        //send unauthorized error code
        res.status(401).send();
    }
}

export {authtorization};
