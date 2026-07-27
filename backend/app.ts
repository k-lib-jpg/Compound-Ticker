import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify();

await app.register(cors, {
  origin: "http://localhost:5173",
});

app.get("/hello", async () => {
  return {
    message: "Hello Fastify!"
  };
});

app.listen({ port: 3000 });