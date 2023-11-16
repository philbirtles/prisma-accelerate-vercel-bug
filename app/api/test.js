import { prisma } from "../prisma.server";
// Vercel Serverless Function
export default async function handler(req, res) {
  try {
    // Connect to the database
    await prisma.$connect();

    // Perform a simple query (adjust according to your schema)
    const users = await prisma.user.findMany(); // Assuming you have a User model

    // Send response
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error in serverless function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Disconnect after handling the request
    await prisma.$disconnect();
  }
}
