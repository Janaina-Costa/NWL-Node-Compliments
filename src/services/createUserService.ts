import {PrismaClient} from '@prisma/client'
import {hash} from 'bcryptjs'



interface IUserRequest{
    name: string, 
    email: string,
    admin?:boolean,
    password:string,
}

class CreateUserService{
    async execute({name, email, admin=false, password}:IUserRequest){
        const prisma = new PrismaClient()
        if(!email){
            throw new Error('Dados invalidos')
        }

        const usersAlreadExist = await prisma.users.findUnique({
            where:{
                email:email
            }
        })
        if(usersAlreadExist){
            throw new Error('Usuário já cadastrado')
        }

        const passwordHash = await hash(password, 8)
        
        const user  =  prisma.users.create({
            data:{
                name,
                email,
                admin, 
                password: passwordHash,
                
            }
        })
        return user
    }
}

export {CreateUserService}