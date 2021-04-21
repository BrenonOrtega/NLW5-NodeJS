import { Router } from "express";
import { settings } from "node:cluster";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/* Tipos de Parametros?
    Routes params => Parametros de rotas.
    http://localhost:1000/settings/1
    Query Params => filtros e buscas

    Body Params => {
        "Key" : "value",
        "Key2" : "Value2"
    } 
*/
routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);
    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings);
    return response.json(settings);
})

export { routes };