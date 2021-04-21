import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

/**
 * HTTP VERBS:
 * GET = Retrieve Data
 * POST = Create Data
 * PUT = Alter Data
 * DELETE = Delete Data
 * PATCH = Alter Specific Data
 */

app.get("/", (request, response) =>{
    return response.json({
        message: "Olá NLW#5!"
    });
});

app.listen(1000, () => console.log("Server running against http://localhost:1000"));
