import express from "express";
import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "templates")));
app.set("views", path.join(__dirname, "..", "templates"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (request, response) =>{
    return response.render("html/client");
});

const http = createServer(app); //-> servidor http 
const io = new Server(http);    // -> Servidor WS

io.on("connection", (socket: Socket) => {
    console.log("Usuário conectado!", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };