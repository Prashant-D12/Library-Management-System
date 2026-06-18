function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">
          {book.title}
        </h3>

        <p className="text-gray-600 mb-2">
          Author: {book.author}
        </p>

        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">
          {book.category}
        </span>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}

export default BookCard;