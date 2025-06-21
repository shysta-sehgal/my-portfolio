// app/books/page.tsx
export const metadata = {
  title: "Books – Shysta Sehgal",
  description: "Books I’ve loved and recommend.",
};

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
      
      {title: "The Giver",
      author: "Lois Lowry",
      cover: "/covers/giver.jpg",
      link: "https://www.goodreads.com/book/show/3636.The_Giver",
      }, 
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Books I Recommend</h1>
      <div className="space-y-8">
        {books.map((book, i) => (
          <div key={i} className="flex items-start space-x-6">
            {book.cover && (
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="w-24 h-auto object-contain border shadow rounded"
              />
            )}
            <div>
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-rose-400 hover:underline">
                {book.title}
              </a>
              <p className="text-sm text-gray-400">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
