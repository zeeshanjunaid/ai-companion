"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import { ModeToggle } from "./theme-toggle";
import { Poppins } from "next/font/google";
import React from "react";
import { Sparkles } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Navbar({ isPro }: { isPro: boolean }) {
  const proModal = useProModal();
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className,
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button
            onClick={proModal.onOpen}
            className=""
            size="sm"
            variant="premium"
          >
            Upgrade <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        )}

        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
