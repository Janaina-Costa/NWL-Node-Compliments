import { PrismaClient } from "@prisma/client";

interface ITagRequest{
    name: string
}


class CreateTagService{
    async execute({name}:ITagRequest){
        const prisma = new PrismaClient()

        if(!name){
            throw new Error('Dados inválidos')
        }

        const nameExist = await prisma.tags.findUnique({
            where:{
                name:name
            }
        })

        if(nameExist){
            throw new Error('Tag já cadastrada')
        }

        const tag = await prisma.tags.create({
            data:{
                name
            }
        })
        return tag
    }
}

export {CreateTagService}