import "dotenv/config";
import connectDatabase from "./db/connectDatabase";
import startServer from "./server";
const bootstrap = async () => {
    await connectDatabase();
    startServer();
};
bootstrap();
//# sourceMappingURL=index.js.map