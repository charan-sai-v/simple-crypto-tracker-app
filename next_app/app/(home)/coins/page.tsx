"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Coin from "@/model/coin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CoinsPage = () => {
  const router = useRouter();

  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("/api/coins");
        const data = await res.json();
        setCoins(data.coins);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, []);
  return (
    <div>
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
              key={coin.id}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/coin/${coin.slug}`)}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{coin.name}</TableCell>
              <TableCell>{coin.price.toFixed(8)}</TableCell>
              <TableCell>{coin.percentChange1h.toFixed(8)}</TableCell>
              <TableCell>{coin.marketCap.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CoinsPage;
