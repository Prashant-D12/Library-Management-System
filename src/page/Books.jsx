import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { books } from "../data/books";

function Books() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Library Books
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar />
        <Filter />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>

    </div>
  );
}

export default Books;