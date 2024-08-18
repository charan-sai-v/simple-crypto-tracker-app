import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return <SignIn path="/sign-in" forceRedirectUrl={"/home"} />;
}
