import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import TrackerCard from "./TrackerCard";

const alerts: any[] = [
  // {
  //   id: 1,
  //   coinId: 1,
  //   name: "Bitcoin",
  //   symbol: "BTC",
  //   setPrice: 70000,
  //   status: "REACHED",
  //   createdAt: "15-05-2024",
  // },
  // {
  //   id: 2,
  //   coinId: 1,
  //   name: "Bitcoin",
  //   symbol: "BTC",
  //   setPrice: 75000,
  //   status: "NOT_REACHED",
  //   createdAt: "15-05-2024",
  // },
];

const transactions: any[] = [
  // {
  //   id: 1,
  //   coinId: 1,
  //   name: "Bitcoin",
  //   symbol: "BTC",
  //   mode: "BUY",
  //   quantity: 0.01,
  //   pricePerCoin: 62000,
  //   totalPrice: 620,
  //   transactionDate: "15-05-2024",
  // },
  // {
  //   id: 2,
  //   coinId: 1,
  //   name: "Bitcoin",
  //   symbol: "BTC",
  //   mode: "SELL",
  //   quantity: 0.01,
  //   pricePerCoin: 62000,
  //   totalPrice: 620,
  //   transactionDate: "15-05-2024",
  // },
];

const RecentTrackers = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5">
      <div className="w-full ">
        <h2 className="text-lg font-semibold">Recent Alert Trackers</h2>
        <div>
          {alerts.length == 0 ? (
            <div className="flex flex-col items-center justify-center">
              <Image
                className="w-64 h-64"
                src={require("../public/assets/empty-tracker.svg")}
                alt="Empty Tracker"
              />
              <p className="text-sm font-medium text-muted-foreground">
                No recent trackers
              </p>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                click the button below to add alert
              </p>
              <TrackerCard />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Set Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.length !== 0 &&
                  alerts.map((alert, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{alert.name}</TableCell>
                      <TableCell>{alert.setPrice}</TableCell>
                      <TableCell>
                        {alert.status === "REACHED" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-green-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
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
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        )}
                      </TableCell>
                      <TableCell>{alert.createdAt}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-lg font-bold mb-3">Recent Transactions</h2>
        <div>
          {transactions.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <Image
                className="w-56 h-56"
                src={require("../public/assets/empty-cart.svg")}
                alt="Empty Tracker"
              />
              <p className="text-sm font-medium text-muted-foreground">
                No transactions
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  {/* <TableHead>Quantity</TableHead>
                  <TableHead>Coin Per Price</TableHead> */}
                  <TableHead>Total Price</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Transaction Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.length !== 0 &&
                  transactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{transaction.name}</TableCell>
                      {/* <TableCell>{transaction.quantity}</TableCell>
                    <TableCell>{transaction.pricePerCoin}</TableCell> */}
                      <TableCell>{transaction.totalPrice}</TableCell>
                      <TableCell>
                        {transaction.mode === "BUY" ? (
                          <Badge>BUY</Badge>
                        ) : (
                          <Badge variant={"destructive"}>SELL</Badge>
                        )}
                      </TableCell>
                      <TableCell>{transaction.transactionDate}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentTrackers;
