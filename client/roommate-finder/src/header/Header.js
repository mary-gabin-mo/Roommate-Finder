import './Header.css';
function Header() {
    return (
      <header className="header">
        <h1 className="logo" href="/">LOGO</h1>
        <nav className="nav">
          <a href="/requests" className="nav-link">Requests</a>
          <a href="/messages" className="nav-link">Messages</a>
          <a href="/account" className="nav-link">Account</a>
        </nav>
      </header>
    );
  }
  
  export default Header;