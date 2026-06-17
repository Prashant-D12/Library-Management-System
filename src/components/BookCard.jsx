function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} width="150" />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.category}</p>
    </div>
  );
}

export default BookCard;