import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../models/User";
class UsersService {
    private usersRepository : Repository<User>;
    
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
       
        const userExists = await this.usersRepository.findOne({email});
        if (userExists) 
            return { 
                user:userExists, 
                statusCode: 200
            };

        const user = this.usersRepository.create({
            email
        });
        await this.usersRepository.save(user);
        return { 
            user:userExists, 
            statusCode: 201,
        };
    }
}

export { UsersService }; 