"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { Menu } from "lucide-react";
import React from "react";
import Sidebar from "./sidebar";

const MobileSidebar = ({ isPro }: { isPro: boolean }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden pr-4">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-secondary w-32 pt-10">
          <Sidebar isPro={isPro} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
