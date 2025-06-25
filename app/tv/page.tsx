'use client';

import React from 'react';

const showsByGenre: Record<string, string[]> = {
  "🎭 Drama": [
    "The Sopranos",
    "Game of Thrones (till season 6)", 
    "Twin Peaks",
  ],
  "🕵 Thriller": [
    "True Detective (season 1)",
    "Sacred Games",
    "Dark"
  ],
  "🛋️ Sitcoms": [
    "Peep Show",
    "Seinfeld",
    "Curb Your Enthusiasm",
    "It's Always Sunny in Philadelphia"
  ],
  "📽️ Docu-comedy": [
    "Nathan for You",
    "The Rehearsal"
  ]
};

export default function MovieRecommendations() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">📺 TV Show Recommendations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(showsByGenre).map(([genre, titles]) => (
          <section
            key={genre}
            className="border border-zinc-700 rounded-xl p-6 shadow-md bg-zinc-900"
          >
            <h2 className="text-2xl font-semibold text-rose-400 mb-4">{genre}</h2>
            <ul className="list-disc list-inside text-lg space-y-1">
              {titles.map((title, index) => (
                <li key={index} className="transition duration-200">
                  {title}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}