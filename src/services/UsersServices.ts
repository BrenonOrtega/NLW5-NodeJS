import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";
class UsersService {
    async Create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        const userExists = await usersRepository.findOne({email});
        if (userExists) 
            return { 
                user:userExists, 
                statusCode: 200
            };

        const user = await usersRepository.create({
            email
        });
        await usersRepository.save(user);
        return { 
            user:userExists, 
            statusCode: 201,
        };
    }
}

export { UsersService }; 