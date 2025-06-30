'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [recsOpen, setRecsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const recsTimeout = useRef<NodeJS.Timeout | null>(null);
  const profileTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => setMounted(true), []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  if (!mounted) return null;

  const handleOpen = (setFn: any, ref: any) => {
    if (ref.current) clearTimeout(ref.current);
    setFn(true);
  };

  const handleClose = (setFn: any, ref: any) => {
    ref.current = setTimeout(() => setFn(false), 150);
  };

  // Close mobile menu when clicking any link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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

  // Desktop Dropdown Components
  const RecsDropdown = (
    <div
      className="relative hidden md:block"
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

  const ProfileDropdown = (
    <div
      className="relative hidden md:block"
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

  // Mobile Menu Component
  const MobileMenu = (
    <div className="md:hidden mobile-menu-container">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 hover:text-rose-400 transition"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>
      
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={closeMobileMenu}
          />
          
          {/* Menu */}
          <div className="fixed top-[73px] left-0 right-0 bg-zinc-900 border-b border-zinc-700 shadow-lg z-50 max-h-[calc(100vh-73px)] overflow-y-auto">
            <div className="px-6 py-4 space-y-4">
              {/* Profile Section */}
              <div>
                <div className="text-rose-400 font-medium mb-2">🧑‍💼 My Profile</div>
                <div className="pl-4 space-y-2">
                  {workPages
                    .filter(page => page.href !== pathname)
                    .map(({ href, label }) => (
                      <Link 
                        key={href} 
                        href={href} 
                        className="block text-gray-300 hover:text-rose-400 transition py-2 min-h-[48px] flex items-center"
                        onClick={closeMobileMenu}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Recs Section */}
              <div>
                <div className="text-rose-400 font-medium mb-2">✨ My Recs</div>
                <div className="pl-4 space-y-2">
                  {recPages
                    .filter(page => page.href !== pathname)
                    .map(({ href, label }) => (
                      <Link 
                        key={href} 
                        href={href} 
                        className="block text-gray-300 hover:text-rose-400 transition py-2 min-h-[48px] flex items-center"
                        onClick={closeMobileMenu}
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Contact */}
              {pathname !== "/contact" && (
                <Link 
                  href="/contact" 
                  className="block text-gray-300 hover:text-rose-400 transition py-3 border-t border-zinc-700 pt-6 min-h-[48px] flex items-center"
                  onClick={closeMobileMenu}
                >
                  📬 Contact Me
                </Link>
              )}
              
              {/* Bottom padding for safe scrolling */}
              <div className="h-4" />
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full px-4 md:px-6 py-4 bg-zinc-900 border-b border-zinc-700 flex justify-between items-center z-50">
      {/* Home Link */}
      {pathname !== "/" ? (
        <Link
          href="/"
          className="text-sm md:text-lg font-semibold text-rose-400 hover:text-rose-300 transition"
        >
          ← Home
        </Link>
      ) : (
        <div />
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm text-gray-300">
        {ProfileDropdown}
        {RecsDropdown}
        {pathname !== "/contact" && (
          <Link href="/contact" className="hover:text-rose-400 transition">
            📬 Contact Me
          </Link>
        )}
      </nav>

      {/* Mobile Navigation */}
      {MobileMenu}
    </header>
    
    {/* Spacer to prevent content from being hidden behind fixed header */}
    <div className="h-[73px]" />
    </>
  );
}