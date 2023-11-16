import { PrismaClient } from "@prisma/client";

if (!globalThis.prisma) {
  globalThis.prismaNoAccelerate = new PrismaClient();
}

const prismaClient = globalThis.prisma;
export { prismaClient as prismaNoAccelerate };
