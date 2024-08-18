import prismadb from "@/lib/prismadb";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    // check if the user exists 
    const existsUser = await prismadb.user.findUnique({
      where: {
        userId
      }
    });
    if (existsUser) {
      return Response.json({ message: "User is already exists" }, { status: 409 });
    }
    // user info from clerk by userID
    const { primaryEmailAddress, fullName  } = await clerkClient.users.getUser(userId);
    const createUser = await prismadb.user.create({
      data: {
        email: primaryEmailAddress?.emailAddress as string,
        name: fullName as string,
        userId
      }
    });
    return Response.json({ message: "User created successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}