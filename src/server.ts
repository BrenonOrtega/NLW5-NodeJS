import { http, io } from "./http";
import "./websocket/client";

http.listen(1000, () => console.log("Server running against http://localhost:1000") );
