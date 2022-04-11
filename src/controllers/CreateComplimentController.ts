import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";



class CreateComplimentController{
    async handle(req: Request, res: Response){
        const {message, user_sender, user_receiver,tag_refer} = req.body
        //const{user_sender, user_receiver,tag_refer} = req.params

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({
            message,
            user_sender, 
            user_receiver,
            tag_refer
        })

        return res.json(compliment)
    }
}

export {CreateComplimentController}