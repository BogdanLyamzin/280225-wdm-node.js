import "dotenv/config";

import webSocketServer from "./webSocketServer.js";

const bootstrap = async ()=> {
    webSocketServer();
}

bootstrap();