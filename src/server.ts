import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(1000, () => console.log("Server running against http://localhost:1000"));
