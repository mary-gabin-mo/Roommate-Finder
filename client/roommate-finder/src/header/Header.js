function Header() {
    return (
      <header className="header">
        <h1 className="logo">LOGO</h1>
        <nav className="nav">
          <a href="/" className="nav-link">Requests</a>
          <a href="/about" className="nav-link">Messages</a>
          <a href="/contact" className="nav-link">Account</a>
        </nav>
      </header>
    );
  }
  
  export default Header;