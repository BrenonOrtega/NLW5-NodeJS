import { Request, Response } from "express";
import { MessagesServices } from "../services/MessagesServices";

class MessagesController {
    async create(request: Request, response: Response) {
        const { admin_id, text, user_id} = request.body;
        const messageServices = new MessagesServices;
        const newMessage = await messageServices.create({
            admin_id, text, user_id
        });

        return response.status(200).json(newMessage);
    }

    async listByUser (request: Request, response:Response) {
        const { user_id } = request.params;
        const messageServices = new MessagesServices;
        const userMessageList = await messageServices.ListByUser(user_id);
        return response.status(200).json(userMessageList);
    }
}

export { MessagesController };