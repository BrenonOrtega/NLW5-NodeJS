import { EDESTADDRREQ } from "node:constants";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface IsettingsCreate {
    chat: boolean,
    username: string;
}

class SettingServices {
    async create ({chat, username} : IsettingsCreate){
        const settingsRepository = getCustomRepository(SettingsRepository);
        const settings = settingsRepository.create({
            chat,
            username
        });

        const userAlreadyExists = await settingsRepository.findOne({
            username,
        });

        if (userAlreadyExists) 
            throw new Error("User Already Exists.");

        await settingsRepository.save(settings);
        return settings;  
    }
}

export { SettingServices };