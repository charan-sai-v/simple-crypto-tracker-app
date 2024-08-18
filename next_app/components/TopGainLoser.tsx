"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Coin from "@/model/coin";

const TopGainLoser = () => {
  const [gainers, setGainers] = useState<Coin[]>([]);
  const [losers, setLosers] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchGainersLosers = async () => {
      try {
        const response = await fetch("/api/coins/gainerloser");
        const { gainers, losers } = await response.json();
        setGainers(gainers);
        setLosers(losers);
      } catch (error) {
        console.error("Error fetching gainers/losers:", error);
      }
    };

    fetchGainersLosers();
  }, []);

  return (
    <Card className="w-fit lg:w-1/4 p-2">
      <CardContent className="">
        <h1>Top 5 Gainers &amp; Losers</h1>
        <Tabs defaultValue="gainer">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gainer">Gainer</TabsTrigger>
            <TabsTrigger value="loser">Loser</TabsTrigger>
          </TabsList>
          <TabsContent value="gainer">
            <Table className="text-xs ">
              <TableBody>
                {gainers.map((coin, index) => (
                  <TableRow key={index} className="border-none">
                    <TableCell className="p-1">{index + 1}</TableCell>
                    <TableCell className="p-1">{coin.name}</TableCell>
                    <TableCell className="p-1">{coin.price}</TableCell>
                    <TableCell className="p-1">
                      {coin.volumeChange24h}
                    </TableCell>
                    <TableCell className="p-1">
                      {/* Render appropriate information here */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="loser">
            <Table className="text-xs">
              <TableBody>
                {losers.map((coin, index) => (
                  <TableRow key={index} className="border-none">
                    <TableCell className="p-1">{index + 1}</TableCell>
                    <TableCell className="p-1">{coin.name}</TableCell>
                    <TableCell className="p-1">{coin.symbol}</TableCell>
                    <TableCell className="p-1">
                      {coin.percentChange24h}
                    </TableCell>
                    <TableCell className="p-1">
                      {/* Render appropriate information here */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TopGainLoser;
