import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UserController";

const routes = Router();
const settingsController = new SettingsController();
const userController = new UserController();

routes.post("/settings", settingsController.Create);
routes.post("/user", userController.Create);

export { routes };

/* Tipos de Parametros?
    Routes params => Parametros de rotas.
    http://localhost:1000/settings/1
    Query Params => filtros e buscas

    Body Params => {
        "Key" : "value",
        "Key2" : "Value2"
    } 
*/
