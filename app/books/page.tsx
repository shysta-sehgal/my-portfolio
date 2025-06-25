'use client';

export default function BooksPage() {
  const books = [
    {
      title: "The Denial of Death",
      author: "Ernest Becker",
      cover: "/covers/denial.jpg",
      link: "https://www.goodreads.com/book/show/2761.The_Denial_of_Death",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      cover: "/covers/crime.jpg",
      link: "https://www.goodreads.com/book/show/28348.Crime_and_Punishment",
    },
    {
      title: "Nineteen Eighty-Four",
      author: "George Orwell",
      cover: "/covers/1984.jpg",
      link: "https://www.goodreads.com/book/show/61439040-1984",
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      cover: "/covers/animalfarm.jpg",
      link: "https://www.goodreads.com/book/show/170448.Animal_Farm",
    },
    {
      title: "The Giver",
      author: "Lois Lowry",
      cover: "/covers/giver.jpg",
      link: "https://www.goodreads.com/book/show/3636.The_Giver",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">📚 Book Recommendations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-4 rounded-lg shadow-md border border-zinc-700 flex flex-col items-center text-center"
          >
            {book.cover && (
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="w-32 h-auto object-contain border shadow rounded mb-4"
              />
            )}
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-rose-400 hover:underline"
            >
              {book.title}
            </a>
            <p className="text-sm text-gray-400 mt-1">by {book.author}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
