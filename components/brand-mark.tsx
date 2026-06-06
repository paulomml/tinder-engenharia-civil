import * as React from "react";
import { HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  iconClassName?: string;
}

export function BrandMark({ className, iconClassName }: BrandMarkProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-3 select-none",
        className
      )}
    >
      <HardHat
        className={cn("size-16 text-primary", iconClassName)}
        strokeWidth={1.6}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1.5 leading-none">
        <span className="font-mono text-base tracking-[0.22em] text-white uppercase font-bold">
          Tinder <span className="text-primary">·</span> Engenharia Civil
        </span>
        <span className="font-mono text-[11px] tracking-[0.3em] text-white/45 uppercase">
          UVA — Universidade Estadual Vale do Acaraú
        </span>
      </div>
    </div>
  );
}
