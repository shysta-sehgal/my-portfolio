'use client';

import React from 'react';

const embedUrls = [
  "https://open.spotify.com/embed/album/20r762YmB5HeofjMCiPMLv", // MBDTF
  "https://open.spotify.com/embed/album/1zN85Ep8w2JORfCe0RHLDP?si=OHdnROluTAmkdvxnZL7-mQ", // 7
  "https://open.spotify.com/embed/album/6TmEZKJtPJ9mPsMBmyteCE?si=-zG5lXGRRh2Xk1Uq0lWBOQ", // I Care Because You Do
  "https://open.spotify.com/embed/album/4iRqf2zoGhh7yO5evg1NYj?si=1qUOhQ4gRbmxz_EAa5WVFA", // Butcher, Baker...
  "https://open.spotify.com/embed/album/49MNmJhZQewjt06rpwp6QR", // Mezzanine
  "https://open.spotify.com/embed/album/14IOe7ahxQPTwUYUQX3IFi?si=AeYsGH2ZRo642yWflnGLrA", // ZABA
  "https://open.spotify.com/embed/album/7BNrUfFSDHEbj1hi12yjdj?si=sUBouEwpSae3HggK6iMcxg", // Fight Club
  "https://open.spotify.com/embed/album/3539EbNgIdEDGBKkUf4wno?si=PaotW6JSTNWx9UNU9LqiPQ",
];

export default function MusicPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">🎧 Music Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {embedUrls.map((url, index) => (
          <iframe
            key={index}
            src={url}
            width="100%"
            height="152"
            style={{ borderRadius: 12 }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
          />
        ))}
      </div>
    </main>
  );
}
