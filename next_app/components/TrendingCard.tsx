import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const coins = [
  {
    index: 1,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    name: "Bitcoin",
    price: "64153",
    setPrice: "70000",
    symbol: "BTC",
    volume_change_24h: "-7",
    market_cap: "1.26 T",
    max_supply: 21000000,
    total_supply: 19690418,
    status: true,
  },
  {
    index: 1027,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    name: "Ethereum",
    price: "3128",
    setPrice: "4000",
    symbol: "ETH",
    volume_change_24h: "-16",
    market_cap: "381 M",
    max_supply: 0,
    total_supply: 122049444,
    status: false,
  },
  {
    index: 1027,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    name: "Ethereum",
    price: "3128",
    setPrice: "4000",
    symbol: "ETH",
    volume_change_24h: "-16",
    market_cap: "381 M",
    max_supply: 0,
    total_supply: 122049444,
    status: false,
  },
  {
    index: 1027,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    name: "Ethereum",
    price: "3128",
    setPrice: "4000",
    symbol: "ETH",
    volume_change_24h: "-16",
    market_cap: "381 M",
    max_supply: 0,
    total_supply: 122049444,
    status: false,
  },
  {
    index: 1027,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    name: "Ethereum",
    price: "3128",
    setPrice: "4000",
    symbol: "ETH",
    volume_change_24h: "-16",
    market_cap: "381 M",
    max_supply: 0,
    total_supply: 122049444,
    status: false,
  },
];

const TrendingCard = () => {
  return (
    <Card className="w-fit lg:w-1/4 p-2">
      {/* <CardHeader></CardHeader> */}
      <CardContent>
        <h1>Top 5 Trackers</h1>
        <Table className="text-xs">
          {/* <TableHeader className="">
            <TableRow className="border-none">
              <TableHead className="p-0">S.No</TableHead>
              <TableHead className="p-0">Coin</TableHead>
              <TableHead className="p-0">Current Price</TableHead>
              <TableHead className="p-0">Set Price</TableHead>
              <TableHead className="p-0">Status</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {coins.map((coin, index) => (
              <TableRow key={coin.index} className="border-none">
                <TableCell className="p-1">{index + 1}</TableCell>
                <TableCell className="p-1">{coin.name}</TableCell>
                <TableCell className="p-1">{coin.price}</TableCell>
                <TableCell className="p-1">{coin.setPrice}</TableCell>
                <TableCell className="p-1">
                  {coin.status ? (
                    <Badge variant={"default"}>Reached</Badge>
                  ) : (
                    <Badge variant={"outline"}>not reached</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
