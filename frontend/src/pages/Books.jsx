 import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Books.css";

function Books() {
  const books = [
    {
      icon: "📖",
      title: "Data Structures",
      desc: "Learn arrays, linked lists, trees, graphs and problem solving.",
    },
    {
      icon: "📘",
      title: "Operating System",
      desc: "Understand processes, memory, scheduling and OS concepts.",
    },
    {
      icon: "📕",
      title: "DBMS",
      desc: "Master SQL, normalization, transactions and database design.",
    },
    {
      icon: "📙",
      title: "Computer Networks",
      desc: "Explore protocols, layers, routing and network architecture.",
    },
    {
      icon: "💻",
      title: "Programming",
      desc: "Practice coding in C++, Java, Python and build logic.",
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      desc: "Dive into AI, models, data analysis and predictions.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="books-page">

        {/* HERO SECTION */}
  <section className="page-hero">
    <div className="page-hero-overlay">
      <p className="page-subtitle">READ • LEARN • EXPLORE</p>
      <h1 className="page-title">Book Collection</h1>
      <p className="page-description">
        Discover carefully selected academic resources designed to support
        focused learning and better understanding.
      </p>

      <div className="page-hero-buttons">
        <button className="primary-btn">Browse Books</button>
        <button className="secondary-btn">View Categories</button>
      </div>
    </div>
  </section>

  {/* BOOK GRID */}
  <div className="books-grid">
    {books.map((book, index) => (
      <div className="book-card" key={index}>
        <h3>{book.title}</h3>
        <p>{book.desc}</p>
        <button className="book-btn">Explore</button>
      </div>
    ))}
  </div>

      <Footer />
      </div>
    </>
  );
}

export default Books;