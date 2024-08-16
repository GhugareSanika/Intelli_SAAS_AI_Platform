"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='md:hidden'>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 h-full">
        <Sidebar className="h-full" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
