import prismadb from "@/lib/prismadb";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const bookmarks = await prismadb.bookmark.findMany({
      where: {
        userId
      }
    })
    return Response.json({ coins: bookmarks }, { status: 200 });
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
    if (!data.coinId) {
      return new Response("Coin id is missing", { status: 400 });
    }
    const AddBookmark = await prismadb.bookmark.create({
      data: {
        userId,
        coinId: data.coinId,
      },
    });
    return new Response(JSON.stringify({ message: "Created successfully!", bookmark: AddBookmark }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating bookmark:", error);
    return new Response("Failed to create bookmark", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const bookmarkId = searchParams.get("bookmarkId");
    if (!bookmarkId) {
      return Response.json({ message: "bookmarkId is missing" }, { status: 403 });
    }
    await prismadb.bookmark.delete({
      where: {
        id: bookmarkId
      }
    });
    return Response.json({message: "Bookmark Deleted"}, {status: 200});
  } catch (error) {
    return Response.json({error}, { status: 500 });
  }
}