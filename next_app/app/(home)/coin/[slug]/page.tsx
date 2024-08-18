"use client";
import AddPortfolioCard from "@/components/AddPortfolioCard";
import RecentTrackers from "@/components/RecentTrackers";
import TrackerCard from "@/components/TrackerCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Coin from "@/model/coin";
import Image from "next/image";
import { useEffect, useState } from "react";

const CoinPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const [coin, setCoin] = useState<Coin>();
  const [loading, setLoading] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    const fetchCoin = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/coins?slug=${slug}`);
        const data = await res.json();
        setCoin(data.coin);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchCoin();
  }, [slug]);

  const createTracker = async (coinId: number, setPrice: number) => {
    try {
      const res = await fetch(`/api/coins/trackers/`, {
        method: "POST",
        body: JSON.stringify({ coinId, setPrice }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <>
          {coin && (
            <>
              <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                <div className="flex flex-col justify-center items-center mr-24">
                  <Image
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin?.coinId}.png`}
                    className="mb-2 rounded-full"
                    width={64}
                    height={64}
                    alt=""
                  />
                  <p className="text-muted-foreground text-sm text-start mb-3">
                    {coin?.symbol}
                  </p>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {coin?.name}
                  </h1>
                  <p className="text-gray-600 mb-5">
                    Price: $
                    {coin?.price > 1
                      ? coin?.price.toFixed(2)
                      : coin?.price.toFixed(8)}
                  </p>
                  <div className="flex  items-center justify-center gap-5">
                    <div className="flex flex-col items-center justify-center">
                      {/* <p className="mr-3">Add to bookmark</p> */}
                      <Button
                        size={"icon"}
                        className=""
                        variant={"outline"}
                        onClick={() => setIsBookmark(!isBookmark)}
                      >
                        {isBookmark ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6  text-[#FFE608] "
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                            />
                          </svg>
                        )}
                      </Button>
                      <p className="text-xs mt-2">Bookmark</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {/* <p className="mr-3">Add to Portfolio</p> */}
                      <AddPortfolioCard />
                      <p className="text-xs mt-2">Add to Portfolio</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {/* <p className="mr-3">Add to Tracker</p> */}
                      {/* <Button className="w-fit" variant={"outline"}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                      </Button> */}
                      <TrackerCard />
                      <p className="text-xs mt-2">Tracker</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Card className="bg-white rounded-lg shadow-md w-[800px] p-3">
                    <CardHeader className="py-2">
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                          />
                        </svg>
                        <h2 className="text-lg font-bold text-gray-800 text-center">
                          Stats
                        </h2>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className=" rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            1h Change
                          </p>
                          <p
                            className={`text-sm ${
                              coin?.percentChange1h >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {coin?.percentChange1h.toLocaleString()}%
                          </p>
                        </div>
                        <div className=" rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            Market Cap
                          </p>
                          <p className="text-sm text-green-600">
                            ${coin?.marketCap.toLocaleString()}
                          </p>
                        </div>
                        <div className=" rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            Volume
                          </p>
                          <p
                            className={`text-sm ${
                              coin?.volumeChange24h >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            ${coin?.volume.toLocaleString()}
                          </p>
                        </div>
                        <div className=" rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            24h Volume Change
                          </p>
                          <p
                            className={`text-sm ${
                              coin?.volumeChange24h >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {coin?.volumeChange24h.toLocaleString()}
                          </p>
                        </div>
                        <div className=" rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            24h Change
                          </p>
                          <p
                            className={`text-sm ${
                              coin?.percentChange24h >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {coin?.percentChange24h.toLocaleString()}%
                          </p>
                        </div>
                        <div className="rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            7d Change
                          </p>
                          <p
                            className={`text-sm ${
                              coin?.percentChange7d >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {coin?.percentChange7d.toLocaleString()}%
                          </p>
                        </div>
                        <div className="rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            Circulating Supply
                          </p>
                          <p className="text-sm text-blue-600">
                            {coin?.circulatingSupply.toLocaleString()}
                          </p>
                        </div>
                        <div className=" rounded-lg p-2 text-center">
                          <p className="text-xs text-gray-600 font-bold">
                            Total Supply
                          </p>
                          <p className="text-sm text-purple-600">
                            {coin?.totalSupply.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
          <div>
            <RecentTrackers />
          </div>
        </>
      )}
    </div>
  );
};

export default CoinPage;
