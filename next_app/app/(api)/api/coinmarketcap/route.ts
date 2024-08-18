import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const apiUrl = process.env.CMC_API_URL as string;
    const apiKey = process.env.CMC_API_KEY as string;
    const res = await fetch(apiUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const coinData = data["data"];

      // Delete all existing coins
      await prismadb.coin.deleteMany();

      // Create new coin entries
      const coinsToCreate = coinData.map((coin: any) => ({
        coinId: coin.id.toString(),
        cmcRank: coin.cmc_rank,
        name: coin.name,
        symbol: coin.symbol,
        slug: coin.slug,
        marketCap: coin.quote.USD.market_cap,
        price: coin.quote.USD.price,
        volume: coin.quote.USD.volume_24h,
        circulatingSupply: coin.circulating_supply,
        totalSupply: coin.max_supply ||  coin.total_supply || null, // Handle null cases
        volumeChange24h: coin.quote.USD.volume_change_24h,
        percentChange1h: coin.quote.USD.percent_change_1h,
        percentChange24h: coin.quote.USD.percent_change_24h,
        percentChange7d: coin.quote.USD.percent_change_7d,
      }));

      await prismadb.coin.createMany({
        data: coinsToCreate,
      });

      return Response.json({
        success: true,
        message: "Coins deleted and created successfully",
        coinsToCreate,
      });
    }

    return Response.json({ message: "Failed to update Coins" });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}