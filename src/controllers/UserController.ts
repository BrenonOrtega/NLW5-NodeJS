import { UsersService } from "../services/UsersServices";
import { Request, Response } from "express";

class UserController{
    async create (request:Request, response:Response): Promise<Response> {
        const { email } = request.body;
        const usersService = new UsersService;
        const { user, statusCode } = await usersService.create(email);
        return response.status(statusCode).json(user);
    }
}
export { UserController };