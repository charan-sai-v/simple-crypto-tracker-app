import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import prismadb from "@/lib/prismadb";
import TrendingCard from "@/components/TrendingCard";
import BookmarkCard from "@/components/BookmarkCard";
import TopGainLoser from "@/components/TopGainLoser";
import TopCoins from "@/components/TopCoins";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const currentU = await currentUser();
  console.log(currentU);

  const existsUser = await prismadb.user.findUnique({
    where: { userId: currentU?.id },
  });
  if (!existsUser) {
    const createUser = await prismadb.user.create({
      data: {
        email: currentU?.primaryEmailAddress?.emailAddress as string,
        name: currentU?.fullName as string,
        userId: currentU?.id as string,
      },
    });
    console.log("Created User: ", createUser.email);
  }

  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-between">
        <div>
          <h3>Hello, {currentU?.firstName}</h3>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 px-3">
        <TrendingCard />
        <BookmarkCard />
        <TopGainLoser />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-7xl w-full">
        <TopCoins />
      </div>
    </main>
  );
}
