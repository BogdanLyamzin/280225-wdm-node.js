import { Server } from "socket.io";
import {createServer} from "node:http";

const webSocketServer = ()=> {
    const httpServer = createServer();
    const wsServer = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    wsServer.on("connection", socket => {
        // console.log("New client connected");
        socket.on("send_message", data => {
            socket.broadcast.emit("receive_message", data);
        })
    })

    const port = Number(process.env.PORT) || 3000;
    httpServer.listen(port, ()=> console.log("WebSocket server running successfully"));
}

export default webSocketServer;