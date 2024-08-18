import prismadb from "@/lib/prismadb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (slug) {
      const getCoin = await prismadb.coin.findUnique({
        where: {
          slug
        }
      });
      return Response.json({ coin: getCoin }, { status: 200 });
    }
    const getCoins = await prismadb.coin.findMany();
    return Response.json({ coins: getCoins }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  } 
}