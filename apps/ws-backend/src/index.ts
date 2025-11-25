import { WebSocketServer, WebSocket } from "ws";
import dotenv from "dotenv";

dotenv.config();

const wss = new WebSocketServer({ port: Number(process.env.PORT) });

wss.on("connection", function connection(ws: WebSocket) {
  ws.on("message", function message(data) {
    ws.send("ping");
  });
});
