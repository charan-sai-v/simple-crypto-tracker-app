"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Coin from "@/model/coin";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TopCoins = () => {
  const router = useRouter();
  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    const fetchTopCoins = async () => {
      const res = await fetch("/api/coins/topcoin");
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setCoins(data.coins);
      }
    };
    fetchTopCoins();
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Coin</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>1h%</TableHead>
          <TableHead>Market Cap</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin, index) => (
          <TableRow
            className="border-none cursor-pointer"
            key={coin.id}
            onClick={() => router.push(`/coin/${coin.slug}`)}
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell>{coin.name}</TableCell>
            <TableCell>{coin.price}</TableCell>
            <TableCell>{coin.percentChange1h}</TableCell>
            <TableCell>{coin.marketCap}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopCoins;
