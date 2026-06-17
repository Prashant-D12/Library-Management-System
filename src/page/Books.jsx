import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { books } from "../data/books";

function Books() {
  return (
    <div>
      <h1>Books</h1>

      <SearchBar />
      <Filter />

      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Books;