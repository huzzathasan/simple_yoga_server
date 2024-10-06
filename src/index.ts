import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { PrismaClient } from "@prisma/client";
import { schema } from "./schema/schema";

const prisma = new PrismaClient();

const yoga = createYoga({ schema: schema, graphqlEndpoint: "/api/v1" });
const server = createServer(yoga);

const port = 3000;
server.listen(port, () => {
  console.info(
    `\x1b[31m📢 Yoga Serer Is Ready at 👉\x1b[4m http://localhost:${port}/api/v1`,
    "\x1b[0m"
  );
});
