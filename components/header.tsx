'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isHome = pathname === "/";

  return (
    <header className="w-full px-6 py-4 border-b border-zinc-700 flex justify-between items-center">
      {isHome ? (
        // Empty left space + Books on right
        <>
          <div /> {/* Placeholder to maintain spacing */}
          <nav className="flex gap-6 text-sm text-gray-300">
            <Link href="/books" className="hover:text-rose-400 transition">
              📚 Books
            </Link>
          </nav>
        </>
      ) : (
        <>
          {/* ← Home on the left */}
          <Link
            href="/"
            className="text-lg font-semibold text-rose-400 hover:text-rose-300 transition"
          >
            ← Home
          </Link>

          <nav className="flex gap-6 text-sm text-gray-300">
            {pathname !== "/about" && (
              <Link href="/about" className="hover:text-rose-400 transition">
                ⭐ About Me
              </Link>
            )}
            {pathname !== "/projects" && (
              <Link href="/projects" className="hover:text-rose-400 transition">
                🚧 Projects
              </Link>
            )}
            {pathname !== "/books" && (
              <Link href="/books" className="hover:text-rose-400 transition">
                📚 Books
              </Link>
            )}
          </nav>
        </>
      )}
    </header>
  );
}
