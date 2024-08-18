type Coin = {
  id: string;
  coinId: string;
  name: string;
  symbol: string;
  slug: string;
  marketCap: number;
  price: number;
  volume: number;
  circulatingSupply: number;
  totalSupply: number;
  volumeChange24h: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  // coinTrackers: CoinTracker[];
};

export default Coin;
