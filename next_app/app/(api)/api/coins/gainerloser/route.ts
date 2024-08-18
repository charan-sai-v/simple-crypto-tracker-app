import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const [gainers, losers] = await Promise.all([
      prismadb.coin.findMany({
        orderBy: {
          percentChange24h: "desc",
        },
        take: 5,
      }),
      prismadb.coin.findMany({
        orderBy: {
          percentChange24h: "asc",
        },
        take: 5,
      }),
    ]);
    return Response.json({ gainers, losers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching gain/loss coins:", error);
    return Response.json({ error: "Error fetching gain/loss coins" }, { status: 500 });
  }
}