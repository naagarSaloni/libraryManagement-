import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">📚 SmartLib</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Books</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar