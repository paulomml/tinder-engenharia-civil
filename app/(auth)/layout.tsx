import React from "react";
import { BrandMark } from "@/components/brand-mark";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[100dvh] w-full bg-background text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at center, hsl(222 47% 16%) 0%, hsl(222 47% 7%) 100%)",
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      />
      <div className="relative min-h-[100dvh] flex flex-col items-center px-4 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <header className="w-full max-w-md flex justify-center mb-10 motion-safe:animate-in fade-in slide-in-from-top-3 duration-700">
          <BrandMark />
        </header>
        <main className="w-full max-w-md flex-1 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
