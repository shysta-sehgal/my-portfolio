'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">📬 Contact Me</h1>

      <div className="space-y-6 text-lg">
        <p>
          Feel free to reach out or connect with me through any of the platforms below.
        </p>

        <ul className="space-y-3">
          <li>
            📧 Email:{" "}
            <a href="mailto:shysta.sehgal@mail.utoronto.ca" className="text-rose-400 underline">
              shysta.sehgal@mail.utoronto.ca
            </a>
          </li>

          <li>
            💼 LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/shysta-sehgal/"
              target="_blank"
              className="text-rose-400 underline"
            >
              linkedin.com/in/shysta-sehgal
            </Link>
          </li>

          <li>
            🐙 GitHub:{" "}
            <Link
              href="https://github.com/shysta-sehgal"
              target="_blank"
              className="text-rose-400 underline"
            >
              github.com/shysta-sehgal
            </Link>
          </li>
          <li>
            🐦 X (Twitter):{" "}
            <Link
              href="https://twitter.com/shysta_sehgal"
              target="_blank"
              className="text-rose-400 underline"
            >
              @shysta_sehgal
            </Link>
          </li>

        </ul>
      </div>
    </main>
  );
}
