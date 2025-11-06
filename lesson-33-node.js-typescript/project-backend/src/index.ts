import "dotenv/config";

import connectDatabase from "./db/connectDatabase";
import startServer from "./server";

const bootstrap = async (): Promise<void> => {
    await connectDatabase();
    startServer();
}

bootstrap();
