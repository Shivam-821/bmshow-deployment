import { WebSocketServer } from "ws";
import "dotenv/config";
import prisma from "@repo/db/client";

const socket = new WebSocketServer({
  port: 3002,
});

socket.on("connection", async (socket) => {
  const res = await prisma.user.create({
    data: {
      email: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  console.log("Client connected");
  socket.send("Hello from web socket server");
});
