import { useState } from "react";

function App() {
  const books = [
    {
      id: 1,
      title: "React Basics",
      author: "John Doe",
      category: "Programming",
    },
    {
      id: 2,
      title: "JavaScript Guide",
      author: "Jane Smith",
      category: "Programming",
    },
    {
      id: 3,
      title: "Python Fundamentals",
      author: "David Miller",
      category: "Programming",
    },
    {
      id: 4,
      title: "History of Nepal",
      author: "Ram Sharma",
      category: "History",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>Library Books</h1>

      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>

            <button
              style={{
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;