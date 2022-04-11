import "express-async-errors"
import express, { NextFunction, Request, Response } from 'express'
import {router} from './routes'

const app = express()

app.use(express.json())
app.use(router)

//tratamento dos erros de excessão
app.use((err: Error, req:Request, res:Response, next:NextFunction)=>{
        if(err instanceof Error){
            return res.status(400).json({
                error:err.message
            })
        }
        return res.status(500).json({
            status:"error",
            message:"internal server error"

        })
})


const HOST = 'http://localhost:'
const PORT = 3001


app.listen(PORT, ()=> console.log(`Running on port ${HOST}${PORT}`))