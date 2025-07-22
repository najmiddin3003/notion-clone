"use client";

import React from "react";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { SignInButton, UserButton } from '@clerk/clerk-react'
// import { useConvexAuth } from 'convex/react'
import Link from "next/link";
// import { Loader } from '@/components/ui/loader'
import { useScrolled } from "@/hooks/use-scrolled";
import Logo from "./logo";

export const Navbar = () => {
  // const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "z-50 bg-background transition-all duration-400 fixed top-0 flex items-center w-full p-6 justify-between",
        scrolled && "border-b shadow-sm px-6 py-4"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        {/* {isLoading && <Loader />} */}
        <Button variant={"ghost"} size={"sm"} asChild>
          <Link href={"/documents"}>Enter Notion</Link>
        </Button>
        <Button size={"sm"}>Get Notion Free</Button>

        <ModeToggle />
      </div>
    </div>
  );
};
