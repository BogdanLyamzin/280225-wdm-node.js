import "dotenv/config";

import connectDatabase from "./db/connectDatabase.js";
import startServer from "./server.js";

const bootstrap = async (): Promise<void> => {
    await connectDatabase();
    startServer();
}

bootstrap();
