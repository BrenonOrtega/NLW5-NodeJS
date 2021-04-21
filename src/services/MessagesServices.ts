import { getCustomRepository } from "typeorm";
import { Message } from "../models/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
    admin_id: string,
    text: string,
    user_id: string,
}

class MessagesServices {
    async create({ admin_id, text, user_id }: IMessageCreate) {
        const messagesRepository = getCustomRepository(MessagesRepository);
        const a = admin_id;
        const b = text;
        const c = user_id;

        const message = messagesRepository.create({
            admin_id, text, user_id,
        });
        
        messagesRepository.save(message);
    }
}

export { MessagesServices };