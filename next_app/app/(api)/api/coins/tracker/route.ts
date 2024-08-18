import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const fetchTracker = await prismadb.coinTracker.findMany({
      where: {
        userId
      }
    });
    return Response.json({ coins: fetchTracker }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const data = await req.json();
    const createTracker = await prismadb.coinTracker.create({
      data: {
        userId,
        coinId: data.coinId,
        setPrice: data.setPrice,
        status: "not reached",
        
      }
    });
    return Response.json({ tracker: createTracker }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });    
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const trackerId = searchParams.get("trackerId");
    if (!trackerId) {
      return Response.json({ message: "trackerId is missing" }, { status: 400 })
    }
    await prismadb.coinTracker.delete({
      where: {
        id: trackerId
      }
    });
    return Response.json({ message:"Coin Tracker deleted successfully" }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}