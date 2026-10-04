"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-[0.2em]">
          {profile.name}
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center"
        >
          <span className="text-2xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="absolute right-6 top-20 flex min-w-48 flex-col gap-4 border border-white/10 bg-black/95 p-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
