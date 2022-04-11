import { PrismaClient } from "@prisma/client"

interface IComplimentRequest{
    message: string,
    user_sender: string,
    user_receiver: string,
    tag_refer: string
}


class CreateComplimentService{
    async execute({message, user_sender, user_receiver,tag_refer}:IComplimentRequest){
        const prisma = new PrismaClient()

        if(user_sender === user_receiver){
            throw new Error ("Incorrect User Receiver.")
        }

        const userReceiverExist = await prisma.users.findUnique({
            where:{
                user_id: user_receiver
            }
        })
        if(!userReceiverExist){
            throw new Error ("User Receiver does not exists!")
        }

        const compliment = prisma.compliments.create({
            data:{
                message,
                user_sender,
                user_receiver,
                tag_refer,
            }
        })
        return compliment
    }
}

export {CreateComplimentService}