import { UsersService } from "../services/UsersServices";
import { Request, Response } from "express";

class UserController{
    async Create (request:Request, response:Response): Promise<Response> {
        const { email } = request.body;
        const usersService = new UsersService();
        const user = await usersService.Create(email);
        return response.json(user);
    }
}

export { UserController };