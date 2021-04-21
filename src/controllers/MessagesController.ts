import { Request, Response } from "express";
import { MessagesServices } from "../services/MessagesServices";

class MessagesController {
    async create(request: Request, response: Response) {
        const { admin_id, text, user_id} = request.body;
        const messageServices = new MessagesServices;
        const newMessage = messageServices.create({
            admin_id, text, user_id
        });

        return response.status(200).json(newMessage);
    }
}