import { Server } from "socket.io";
import { createServer } from "node:http";

import Order from "./db/models/Order.js";

const createWsServer = () => {
  const httpServer = createServer();
  const wsServer = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  Order.watch().on("change", (data) => {
    console.log(data);
  });

  const wsPort = Number(process.env.WS_PORT) || 5000;
  httpServer.listen(wsPort, () =>
    console.log(`WebSocker server running on ${wsPort} port`),
  );
};

export default createWsServer;
