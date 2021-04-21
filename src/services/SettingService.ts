import { EDESTADDRREQ } from "node:constants";
import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../models/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface IsettingsCreate {
    chat: boolean,
    username: string;
}

class SettingServices {
    private settingsRepository : Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }
    async create ({chat, username} : IsettingsCreate){
        
        const settings = this.settingsRepository.create({
            chat,
            username
        });

        const userAlreadyExists = await this.settingsRepository.findOne({
            username,
        });

        if (userAlreadyExists) 
            throw new Error("User Already Exists.");

        await this.settingsRepository.save(settings);
        return settings;  
    }
}

export { SettingServices };