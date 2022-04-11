import { PrismaClient } from "@prisma/client"
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface IAuthenticateRequest{
    email: string,
    password: string
}


class AuthenticateUserService{
    async execute({email, password}:IAuthenticateRequest){
        const prisma = new PrismaClient()

        //verifica se e-mail existe
        const userExist = await prisma.users.findUnique({
            where:{
                email:email
            }
        })

        if(!userExist){
            throw new Error('Email/Password incorrect')
        }
        
        //verifica se senha está corretament
        const passwordMatch = await compare(password, userExist.password)
        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        //gerar token
        const token = sign({
            email: userExist.email,
        },"92d72a0a8454c78d1a287ecddba837db", {
            subject:userExist.user_id,
            expiresIn:"1d"
        })  
        return token

    }
}

export {AuthenticateUserService}