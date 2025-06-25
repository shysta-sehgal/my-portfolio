'use client';

import React from 'react';

const moviesByGenre: Record<string, string[]> = {
  "🌀 Surreal": [
    "No Smoking",
    "Mulholland Drive",
    "Eyes Wide Shut",
    "Being John Malkovich",
    "The Fountain",
  ],
  "🧠 Psychological": [
    "Black Swan",
    "Fight Club",
    "Shutter Island",
  ],
  "🤖 Sci-Fi": [
    "Her",
    "Arrival",
    "The Fly",
    "Videodrome",
    "eXistenZ",
  ],
  "🎭 Drama": [
    "Seventh Seal",
    "There Will Be Blood",
    "American Beauty",
    "Kids",
    "The Color of Pomegranates",
  ],
  "🕵️‍♀️ Mystery / Crime": [
    "Blue Velvet",
    "La Haine",
    "Ugly",
  ],
  "🎥 Satire / Dark Comedy": [
    "Vice",
    "7 Khoon Maaf",
    "Delicatessen",
    "American Psycho",
  ],
  "⚔️ Action / Western": [
    "Django Unchained",
    "Kill Bill",
    "Inglourious Basterds",
  ],
  "❤️ Romance": [
    "Annie Hall",
    "Eternal Sunshine of the Spotless Mind",
    "Wild at Heart",
  ],
};

export default function MovieRecommendations() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">🎬 Movie Recommendations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(moviesByGenre).map(([genre, titles]) => (
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
