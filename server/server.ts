import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port : string | undefined = process.env.PORT

app.get('/', (req: Request, res: Response)=> {
    res.send('Hello word')
})

app.set((port!), ()=> {
    console.log(`Server is running at port: ${port}`)
})

export const viteNodeApp = app;