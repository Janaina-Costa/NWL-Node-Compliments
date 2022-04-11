import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    //receber token    
    const authToken = req.headers.authorization

    //validar se token está persistentChildCompilerSingletonPlugin
    if(!authToken){
        return res.status(401).end()
    }
    const [,token] = authToken.split(" ")
        
    //verificar se token é válido
    try{
        const decode = verify(token, "92d72a0a8454c78d1a287ecddba837db")
        return next()
        
    }catch(err){
        return res.status(401).end()
    }
    
    
}