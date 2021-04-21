import { UserRepository } from "../repositories/UserRepository";

class UsersService {
    async Create(email: string) {
        const userRepository = new UserRepository();
        const userExists = userRepository.findOne({
            email,
        })
        if (userExists) 
            return userExists;

        const user = userRepository.create({
            email
        });
        await userRepository.save(user);
        return user;
    }
}

export { UsersService };