'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || pathname === "/") return null;

  return (
    <header className="w-full px-6 py-4 border-b border-zinc-700">
      <Link
        href="/"
        className="text-lg font-semibold text-rose-400 hover:text-rose-300 transition"
      >
        Home
      </Link>
    </header>
  );
}
