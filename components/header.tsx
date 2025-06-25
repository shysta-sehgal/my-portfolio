'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [recsOpen, setRecsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const recsTimeout = useRef<NodeJS.Timeout | null>(null);
  const profileTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleOpen = (setFn: any, ref: any) => {
    if (ref.current) clearTimeout(ref.current);
    setFn(true);
  };

  const handleClose = (setFn: any, ref: any) => {
    ref.current = setTimeout(() => setFn(false), 150);
  };

  const recPages = [
    { href: "/books", label: "📚 Books" },
    { href: "/movies", label: "🎬 Movies" },
    { href: "/tv", label: "📺 TV" },
    { href: "/music", label: "🎧 Music" },
  ];

  const workPages = [
    { href: "/about", label: "🙋‍♀️ About Me" },
    { href: "/projects", label: "🚧 Projects" },
    { href: "/experience", label: "💼 Work Experience" },
    { href: "/awards", label: "🏆 Awards" },
    { href: "/cv", label: "📄 CV & Tech Stack" },
  ];

  const Dropdown = (
    <div
      className="relative"
      onMouseEnter={() => handleOpen(setRecsOpen, recsTimeout)}
      onMouseLeave={() => handleClose(setRecsOpen, recsTimeout)}
    >
      <button className="hover:text-rose-400 transition">✨ My Recs ▾</button>
      {recsOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 border border-zinc-700 rounded shadow-lg z-50">
          {recPages
            .filter(page => page.href !== pathname)
            .map(({ href, label }) => (
              <Link key={href} href={href} className="block px-4 py-2 hover:bg-zinc-700">
                {label}
              </Link>
            ))}
        </div>
      )}
    </div>
  );

  const WorkDropdown = (
    <div
      className="relative"
      onMouseEnter={() => handleOpen(setProfileOpen, profileTimeout)}
      onMouseLeave={() => handleClose(setProfileOpen, profileTimeout)}
    >
      <button className="hover:text-rose-400 transition">🧑‍💼 My Profile ▾</button>
      {profileOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-zinc-800 border border-zinc-700 rounded shadow-lg z-50">
          {workPages
            .filter(page => page.href !== pathname)
            .map(({ href, label }) => (
              <Link key={href} href={href} className="block px-4 py-2 hover:bg-zinc-700">
                {label}
              </Link>
            ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 w-full px-6 py-4 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-700 flex justify-between items-center z-40">
      {pathname !== "/" ? (
        <Link
          href="/"
          className="text-lg font-semibold text-rose-400 hover:text-rose-300 transition"
        >
          ← Home
        </Link>
      ) : (
        <div />
      )}
      <nav className="flex gap-6 text-sm text-gray-300">
        {WorkDropdown}
        {Dropdown}
        {pathname !== "/contact" && (
          <Link href="/contact" className="hover:text-rose-400 transition">
            📬 Contact Me
          </Link>
        )}
      </nav>
    </header>
  );
}