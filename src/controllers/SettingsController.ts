import { Request, Response } from "express";
import { SettingServices } from "../services/SettingService";


export class SettingsController {
    async Create(request : Request, response : Response) {
        const {chat, username} = request.body;
        const services = new SettingServices();
        try { 
            const createdSetting = await services.Create({ chat, username });
            return createdSetting;
        } catch(error){
            return response.status(400).json({ 
                message:"Nome de usuário já está em uso."
            });
        }
    }
}

