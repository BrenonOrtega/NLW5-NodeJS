import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { MessagesController } from "./controllers/MessagesController";
import { UserController } from "./controllers/UserController";

const routes = Router();
const settingsController = new SettingsController();
const userController = new UserController();
const messagesController = new MessagesController();

routes.post("/messages", messagesController.create);
routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);

routes.get("/messages", messagesController.listByUser);

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
