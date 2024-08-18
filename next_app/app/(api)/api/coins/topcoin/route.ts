import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const topCoins = await prismadb.coin.findMany({
      take: 20,
      orderBy: {
         cmcRank: "asc"
      }
    })
    return Response.json({ coins: topCoins }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}