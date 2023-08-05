import { PrismaClient } from "@prisma/client";
const prismadb = globalThis.prisma || new PrismaClient();

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
