"use client";

import { rc } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shared/tooltip";
import { SegmentPickerItems } from "@/config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-2">Segmented Picker</h1>
      <div className="bg-tertiary/[12%] rounded-lg p-0.5 overflow-hidden flex">
        {SegmentPickerItems.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <button
                    className={rc(
                      "rounded-mlg py-1.5 px-14 border-[0.5px] border-transparent box-border",
                      item.active
                        ? "smooth-shadow bg-primary border-[0.5px] border-opacity-5"
                        : "hover:bg-tertiary/[5%] duration-200 hover:border-[0.5px] hover:border-opacity-5 hover:shadow-inner"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipPortal >
                  <TooltipContent side="top">{item.name}</TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </main>
  );
}
