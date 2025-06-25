'use client';

import Link from "next/link";

export default function RecommendationsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">✨ Recommendations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Link
          href="/books"
          className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center hover:border-rose-400 hover:text-rose-400 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">📚 Books</h2>
        </Link>

        <Link
          href="/movies"
          className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center hover:border-rose-400 hover:text-rose-400 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">🎬 Movies</h2>
        </Link>
        <Link
          href="/tv"
          className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center hover:border-rose-400 hover:text-rose-400 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">📺 TV Shows</h2>
        </Link>
         <Link
          href="/music"
          className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center hover:border-rose-400 hover:text-rose-400 transition"
        >
          <h2 className="text-2xl font-semibold mb-2">🎧 Music</h2>
        </Link>
      </div>
    </main>
  );
}
