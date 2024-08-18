"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TrackerCard = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
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
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Tracker</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="container mx-auto mt-10">
          <div className="bg-white p-6 rounded-lg max-w-sm shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p>Coin</p>
              <p className="font-semibold">Bitcoin</p>
            </div>
            <div className="flex justify-between items-center mb-8">
              <p>Current Price</p>
              <p className="font-semibold">$67,000</p>
            </div>
            <div className="">
              <form onSubmit={() => {}} className="space-y-4">
                <Label className="text-center">Set Price</Label>
                <Input
                  type="number"
                  placeholder="Enter price"
                  className="w-full"
                  min={67000}
                  required
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrackerCard;
